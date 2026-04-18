import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const jokeURL = "https://v2.jokeapi.dev/joke/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(`${jokeURL}Any`);
        res.render("dashboard.ejs", {
            joke: result.data.joke || `${result.data.setup} ${result.data.delivery}`,
            formData: {} 
        });
    } catch (error) {
        console.log(error.message);
    }
});

app.post("/joke", async (req, res) => {
    try {
        const {
            categoryType,
            categories,
            lang,
            blacklist,
            jokeType,
            amount
        } = req.body;

        // 🟢 1. Category (IMPORTANT)
        let category = "Any";

        if (categoryType === "Custom" && categories) {
            category = Array.isArray(categories)
                ? categories.join(",")
                : categories;
        }

        // 🟢 2. Build query params
        const params = {};

        if (lang) params.lang = lang;

        if (blacklist) {
            params.blacklistFlags = Array.isArray(blacklist)
                ? blacklist.join(",")
                : blacklist;
        }

        if (jokeType) {
            params.type = Array.isArray(jokeType)
                ? jokeType.join(",")
                : jokeType;
        }

        if (amount) params.amount = amount;

        // 🟢 3. API call
        const url = `${jokeURL}${category}`;
        const result = await axios.get(url, { params });

        const data = result.data;

        // 🟢 4. Handle joke format
        let joke = "";

        if (data.jokes) {
            // 🟢 Multiple jokes
            joke = data.jokes.map(j => {
                return j.type === "single"
                    ? j.joke
                    : `${j.setup} ${j.delivery}`;
            }).join("<br><br>");

        } else {
            // 🔵 Single joke
            joke = data.type === "single"
                ? data.joke
                : `${data.setup} ${data.delivery}`;
        }

        // 🟢 5. Send to frontend
        res.render("dashboard.ejs", {
            joke: joke,
            formData: req.body 
        });
    } catch (error) {
        console.log(error.message);

        res.render("dashboard.ejs", {
            joke: "Failed to fetch joke",
            formData: req.body 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
});