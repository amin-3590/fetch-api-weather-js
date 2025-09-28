class Weather {
    constructor(city, state) {
        this.apiKey = '6d167ccaf71899d33e831a349035eec2'
        this.city = city;
        this.state = state;
    }


    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)

        if (response.ok) {
            const responseData = await response.json()
            return responseData
        } else {
            throw Error(response.status)
        }
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state
    }

    get location() {
        return this.state + ' , ' + this.city
    }
}