var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Player {
    constructor(p_x, p_y, radius, color) 
    {
        this.p_x = p_x;
        this.p_y = p_y;
        this.radius = radius;
        this.color = color;
    }

    draw() 
    {
        context.beginPath();
        context.arc(this.p_x, this.p_y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}

class bullet {
    constructor(m_x, m_y) {
        this.m_x = m_x;
        this.m_y = m_y;
    }
}

context.canvas.addEventListener("click", function (event) {
    m_x = event.clientX;
    m_y = event.clientY;

    context.fillStyle = "skyblue";
    context.fillRect(m_x - 10, m_y - 10, 10, 10);
})

var char_player = new Player(100, 100, 20, 'skyblue');
char_player.draw();