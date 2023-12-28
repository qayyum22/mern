

exports.posts = async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
    }
};

exports.comments = async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};


exports.albums = async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums")
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

exports.photos = async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

exports.todos = async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

exports.users = async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error");
    }
}