class Form{


    display(){


        this.title= createElement('h2')
        this.title.html("CAR RACING GAME")
        this.title.position(150,50)

        this.input= createInput("name")
        this.input.position(100,200)

        this.button= createButton("PLAY")
        this.button.position(200,250)

        this.button.mousePressed( ()=>{

            this.input.hide()
            this.button.hide()

            var name= this.input.value()
            this.greetings= createElement('h1')
            this.greetings.html("hello : " + name)
            this.greetings.position(200,200)
        })

    }
}