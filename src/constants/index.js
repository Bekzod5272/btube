import { Checkroom, DeveloperMode, FaceRetouchingNatural, FitnessCenter, GraphicEq, Home, LiveTv, MusicNote, OndemandVideo, SportsEsports, TheaterComedy } from "@mui/icons-material";

export const logo = 'https://i.pinimg.com/564x/f3/1a/ea/f31aea15e6088d3fa68d4022f3d6097a.jpg';

export const categories = [
    {
        name: 'New',
        icon: <Home />
    },
    {
        name: 'Movies',
        icon: <OndemandVideo />
    },
    {
        name: "Live",
        icon: <LiveTv />
    },
    {
        name: "Gaming",
        icon: <SportsEsports />
    },
    {
        name: "Comedy",
        icon: <TheaterComedy />
    },
    {
        name: "Podcast",
        icon: <GraphicEq />
    },
    {
        name: "Fashion",
        icon: <Checkroom />
    },
    {
        name: "Crypto",
        icon: <DeveloperMode />
    },
    {
        name: "Gym",
        icon: <FitnessCenter />
    },
    {
        name: "Beauty",
        icon: <FaceRetouchingNatural />
    },
    {
        name: "Music",
        icon: <MusicNote />
    }
]