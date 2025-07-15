const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 The Doggy Destination App | Jill Schatz</p>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Contact</th>
                        <th>Resources</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">Home</a>
                        </td>
                        <td>
                            <a href="https://www.bringfido.com/attraction/city/saint_louis_mo_us/">Bring Fido</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/pupPlaces">About</a>
                        </td>
                        <td>
                            <a href="https://explorestlouis.com/guide/pet-friendly-st-louis/">Explore St. Louis - Pet Paradise</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href ="https://github.com/schatzjmae84">Contact</a>
                        </td>
                        <td>
                            <a href="https://www.rover.com/">Rover - Loving pet care in your neighborhood</a>
                        </td>
                    </tr>
                </thead>
            </table>
        </footer>
    );
};

export default Footer;