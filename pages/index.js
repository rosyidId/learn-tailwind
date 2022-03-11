import App from "../layouts/App";

export default function Home() {
    return (
        <div>
          Tailwind Css
        </div>
    );
}


Home.getLayout = (page) => <App children={page}/>