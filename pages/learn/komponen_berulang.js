import Button from '../../components/Button';

export default function Component() {
    return (
        <div className="space-x-2">
            <Button onClick={() => console.log("Selamat")}>Primary</Button>
            <Button className='bg-purple-600 hover:bg-purple-900'>Purple</Button>
        </div>
    );
}
