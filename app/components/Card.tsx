import ProfileCard from './external/ProfileCard'

export default function Card() {
    return (
        <ProfileCard
            name="Manogya Singh"
            title="Junior, IIT Delhi. Figuring stuff out."
            handle="manogyasingh"
            status="Online"
            contactText="follow"
            avatarUrl="https://media.licdn.com/dms/image/v2/D5603AQGbEDNbp2wP8A/profile-displayphoto-shrink_800_800/B56ZRH7gpBGoAk-/0/1736373573404?e=1758153600&v=beta&t=phT0rg7RXPfw_0lIc5Tga16scSW3WGxD8vJIFxjHabw"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => window.open('https://linkedin.com/in/manogya-singh/', '_blank')}
        />
    );
}