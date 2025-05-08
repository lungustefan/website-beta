async function checkIfAustralian() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const isUpsideDown = urlParams.get('australia-is-upside-down') === 'true';
        
        if (isUpsideDown) {
            document.documentElement.classList.add('transform', 'rotate-180');
        } else {
            document.documentElement.classList.remove('transform', 'rotate-180');
        }

        if (!urlParams.has('australia-is-upside-down')) {
            const ipResponse = await fetch('https://ifconfig.me/ip');
            const ip = await ipResponse.text();
            const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
            const data = await geoResponse.json();

            if (data.country === 'AU') {
                document.documentElement.classList.add('transform', 'rotate-180');
                urlParams.set('australia-is-upside-down', 'true');
                window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
            }
        }
    } catch (error) {
        console.error('Error fetching geolocation data:', error);
    }
}

checkIfAustralian();