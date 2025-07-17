import Iridescence from './external/Iridescence';

export default function Background() {
    return (
        <div className="absolute inset-0 z-[-100] bg-black">
            <Iridescence
                color={[0.5, 0, 0.2]}
                mouseReact={false}
                amplitude={0.1}
                speed={1.0}
            />
        </div>
    );
}