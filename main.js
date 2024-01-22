const insertData = () => {
    db.libros.insertOne(
        {
            _id: 1,
            title: 'El aleph',
            author: 'Borges',
            editorial: ['Siglo XXI', 'Planeta'],
            price: 20,
            quantity: 50
        }
    )
    db.libros.insertOne(
        {
            _id: 2,
            title: 'Martin Fierro',
            author: 'Jose Hernandez',
            editorial: ['Siglo XXI'],
            price: 50,
            quantity: 12
        }
    )
    db.libros.insertOne(
        {
            _id: 3,
            title: 'Aprenda PHP',
            author: 'Mario Molina',
            editorial: ['Siglo XXI', 'Planeta'],
            price: 50,
            quantity: 20
        }
    )
    db.libros.insertOne(
        {
            _id: 4,
            title: 'Java en 10 minutos',
            editorial: ['Siglo XXI'],
            price: 45,
            quantity: 1
        }
    )
}

insertData();