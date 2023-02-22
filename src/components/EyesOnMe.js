// Code EyesOnMe Component Here
function EyesOnMe () {
    function onme() {
        console.log('Good!');
    }

    function offme() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div name='Eyes'>
            <button onFocus={onme} onBlur={offme}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;