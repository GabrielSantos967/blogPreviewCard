function escuro(){
    let container = document.getElementById("container")

    if (container.className === 'claro') {
        container.className = 'escuro'
    } else {
        container.className = 'claro'
    }

    let ball = document.getElementById("ball")

    if (ball.className === "esquerda"){
        ball.className = "direita"
    } else{
        ball.className = "esquerda"
    }
}