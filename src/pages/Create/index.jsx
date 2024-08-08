import { useState } from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Titulo } from "./styles"

export function Create(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')
    
    function handleCreate(){
        // Verifica se algum desses campos está vazio.
        if(!name || !email || !password){
            return alert('Preencha todos os campos.')
        }

        console.log("Nome: " + name
                    +"/nE-mail" + email
                    +"/nPassword" + password)

        alert("Nome: " + name
            +"/nE-mail" + email
            +"/nPassword" + password)
    }

    return(
        <>
            <Titulo>
                Cadastro de Usuário.
            </Titulo>

            <Input 
                placeholder='Put your name here:'
                type="text" 
                onChange={e => setName(e.target.value)}
            />
            <Input 
                placeholder='Put your email here:'
                type="text"
                onChange={e => setEmail(e.target.value)}
            />
            <Input 
                placeholder='Put your password here:'
                type="password"
                onChange={e => setPassword(e.target.value)}
            />

            <Button 
                title="Register"
                onClick={handleCreate}
                
                
            />
        </>
    )

}

