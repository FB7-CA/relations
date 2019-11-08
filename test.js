const { User, Book } = require("./schemas")

async function create() {
    const userInfo = {
        // obj informativo
        name: "Marco",
        age: 22,
        email: "uwu",
        password: "123"
    }
    const user = new User(userInfo)
    await user.save()

    const bookInfo = {
        name: "The lord of the rings",
        publishedDate: new Date(),
        pageNumber: 300,
        author: user
    }
    const book = new Book(bookInfo)
    await book.save()

    user.books.push(book._doc)
    await user.save()

    console.log(user)
    console.log(book)
}

async function gets() {
    const users = await User.find().populate("books")
    console.log(JSON.stringify(users, null, 2))
    // console.log(users)
    // const books = await Book.find()
    // console.log(books)
}

gets()
