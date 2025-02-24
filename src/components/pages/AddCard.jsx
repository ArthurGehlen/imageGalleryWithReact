// Hooks
import { useState } from 'react'

// Components
import Main from "../ui/Main"

// Assets
import styles from './AddCard.module.css'

// TODO: Fazer um Button de visualização de card

function AddCard() {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handle_file_change = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    }

    const handle_submit = (e) => {
        e.preventDefault()

        // console.log(title);
        // console.log(description);
    }

    return (
        <Main page='add_image'>
            <form onSubmit={handle_submit} className={styles.form}>
                <div className="file">
                    <span>Escolha uma imagem:</span>
                    <label htmlFor="file" className={styles.file_input}>
                        <input
                            type="file"
                            placeholder='Enviar imagem'
                            id="file"
                            required
                        />
                        Enviar imagem
                    </label>
                </div>
                <div className="title">
                    <label htmlFor="title">Escreva um título:</label>
                    <input
                        type="text"
                        placeholder='...'
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>
                <div className="description">
                    <label htmlFor="description">Escreva uma descrição:</label>
                    <textarea
                        id="description"
                        placeholder='(opcional)'
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <button type='submit'>Criar Card</button>
                <hr />
                {/* {file && <img src={URL.createObjectURL(file)} alt="Preview" width="200" />} */}
            </form>
        </Main>
    )
}

export default AddCard