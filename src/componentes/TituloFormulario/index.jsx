import './titulo-formulario.estilos.css'

// props é um objeto
// props.children -> para acessar as propriedades do objeto
export function TituloFormulario ({children}) {
  return (
    <h2 className='titulo-form'>{children}</h2>
  )
}