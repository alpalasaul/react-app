import React, {Component} from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    // se ejecuta cuando el componente a sido montado (cargado)
    async componentDidMount() { // async indica que se va a demorar lo que vamos a cargar
        const res = await fetch('https://jsonplaceholder.typicode.com/posts') // await (va a tomar algo de tiempo y cuando temrine vamos almecenar esa respuesta)
        const data = await res.json()
        this.setState({
            posts: data
        })
    }

    // El método render pinta todos los datos (Es el último método de todo el lifeCicly)
    render() {
        return (
            <div>
                <h1>Posts</h1>
                { // introducir código de js
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}


