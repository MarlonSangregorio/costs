import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubtmitButton'

function ProjectForm({ handleSubmit, btnText, projectData }) {
  //esperar resposta da API
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  //o useEffect age como se fosse o limitador do loop, o useState fica consultando toda vez o "banco de dados" para ver se o mapeamento muda, mas não é isso que eu quero e é pra isso q serve o useEffect, como se fosse um limitador de loop, do while. Pelo menos foi o que eu entendi.tudo isso são conteudos da aula #23 do curso de React do canal "Hora de Codar"

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //parece o try catch do java...
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch(err => console.log(err))
    //esperando um valor inicial, as options[] vazias.
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({ ...project, [e.target.name]: e.target.value})
  }

  function handleCategory(e){
    setProject({ ...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex]. text,
    }})
  }


  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select 
      name="category_id" 
      text="Selecione a categoria" 
      options={categories} 
      handleOnChange={handleCategory}
      value={project.category ? project.category.id : ''}
      />

      <SubmitButton text={btnText} />
    </form>
  )
}
export default ProjectForm
