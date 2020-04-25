import Axios from "axios";

export default Axios.create({
    API_URL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
    httpHeaders: {
        headers: {
            'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
            'x-rapidapi-key': 'fbf1b04851mshc7ae899ebcfdeacp110ecajsncb3dcc3a0692'
        }
    }
})

