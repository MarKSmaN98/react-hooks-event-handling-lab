// Code Keypad Component Here

function Keypad (){
    function onin() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input onChange={onin}type='password' placeholder='...Password...'></input>
        </div>
    )
}

export default Keypad;