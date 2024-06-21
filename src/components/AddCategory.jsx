import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('One Punch');

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
        // console.log( event.target.value );
    }

    return (
        <form onSubmit={ onSubmit }>                                  {/*usamos un "form" para poder tratar el "Enter"*/}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }      // React nos obliga a definir "onChange" para poder escribir
            />
        </form>
    )
}
