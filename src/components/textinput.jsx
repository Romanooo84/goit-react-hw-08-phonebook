

export const TextInput = ({onSubmit, nameValue, onChange, numberValue}) => {

    return (
    <div>  
        <p>Contacts</p>
        <form style={{ display: 'flex' }} onSubmit={onSubmit} > 
        <div>
            <p>Name</p>    
                    <input
                    type="text"
                    name="name"
                    id='id'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value = {nameValue}
                    required
                    onChange={onChange}
                    
                    
                />
                </div>
               <div>
                <p>Phone number</p> 
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value = {numberValue}
                    required
                    onChange={onChange}
                    
                    />
                <button type='submit'>Add Contact</button>
                </div> 
            </form> 
    </div>
    )
}