import Button from './Button'

const Header = ({ hideForm, showAdd }) => {
    return (
        <div className='header'>
            <h1>Todo App</h1>
            <Button onclick={hideForm} buttonText={showAdd ? "close" : "AddTask"} color={showAdd ? "red" : "steelblue"} />
        </div>
    )
}

export default Header