import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";
import { useState, createContext, useMemo } from "react";

// Crear el contexto del modo de color
export const colorModeContext = createContext();

// Tokens de colores personalizados para light y dark
export const tokens = (mode) => ({


    ...(mode === "dark"
        ? {
            modeColor: {
                100: "#A055D3",
                200: "#8A3BBF",
                300: "#7327A5",
                400: "#5C198A",
                500: "#45106E",
                600: "#2E084A",
            },
            gray: {
                100: "#f3f3f3",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414",
            },

            primary: {
                100: "#ffffff",
                200: "#a1a4ab",
                300: "#727681",
                400: "rgba(27, 24, 24, 0.65)",
                500: "#141b2d",
                600: "rgba(27, 24, 24, 0.65)",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509",
            },
            greenAccent: {
                100: "#dbf5ee",
                200: "#bb85eb",
                300: "#521785",
                400: "#70d6bd",
                500: "#4cccac",
                600: "#3da38a",
                700: "#2e7a67",
                800: "#1e5245",
                900: "#0f2922",
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f",
            },
            blueAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "rgba(83, 91, 200, 0.26)",
                800: "#2a2d64",
                900: "#151632",
            },
        }
        : {
            modeColor: {
                100: "#70D6BD",
                200: "#4CCCAC",
                300: "#3DA38A",
                400: "#2E7A67",
                500: "#1E5245",
                600: "#0F2922",
            },
            gray: {
                100: "#f3f3f3",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "rgb(100, 98,98,0.8)",
                500: "#141b2d",
                600: "rgb(100, 98,98,0.8)",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            greenAccent: {
                100: "#0f2922",
                200: "#1e5245",
                300: "#b7ebde",
                400: "#3da38a",
                500: "#4cccac",
                600: "#70d6bd",
                700: "#94e0cd",
                800: "#b7ebde",
                900: "#dbf5ee",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#3da38a",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
        }),
});

// Configuración del tema
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary: {
                        main: colors.greenAccent[500]
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100],
                    },
                    background: {
                        default: colors.primary[500]
                    },
                    text: {
                        primary: "#ffffff", // El texto siempre será blanco
                        secondary: "#ffffff", // También los textos secundarios serán blancos
                    }
                }
                : {
                    primary: {
                        main: colors.primary[100]
                    },
                    secondary: {
                        main: colors.greenAccent[500]
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                    text: {
                        primary: "#ffffff", // El texto siempre será blanco
                        secondary: "#ffffff", // También los textos secundarios serán blancos
                    }
                })
        },
        typography: {
            fontFamily: ["  Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: [" Poppins", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 28,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 15,
            },
        },
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: "#ffffff", // Aquí forzamos que todos los iconos sean blancos
                    },
                },
            },
        },

        custom: {
            fondo: "#ffffff",
            texto: {
                fontSize: 11,
                fill: "#333333",
                borderWidth: 0,
                outlineColor: "transparent",
            },
            eje: {
                dominio: {
                    line: {
                        stroke: "#777777",
                        strokeWidth: 1,
                    },
                },
                leyenda: {
                    texto: {
                        fontSize: 12,
                        fill: "#333333",
                        borderWidth: 0,
                        outlineColor: "transparent",
                    },
                },
                garrapatas: {
                    line: {
                        stroke: "#777777",
                        strokeWidth: 1,
                    },
                    texto: {
                        fontSize: 11,
                        fill: "#333333",
                        borderWidth: 0,
                        outlineColor: "transparent",
                    },
                },
            },
            red: {
                line: {
                    stroke: "#dddddd",
                    strokeWidth: 1,
                },
            },
            leyendas: {
                titulo: {
                    texto: {
                        fontSize: 11,
                        fill: "#333333",
                        borderWidth: 0,
                        outlineColor: "transparent",
                    },
                },
                texto: {
                    fontSize: 11,
                    fill: "#333333",
                    borderWidth: 0,
                    outlineColor: "transparent",
                },
            },
            anotaciones: {
                texto: {
                    fontSize: 13,
                    fill: "#333333",
                    borderWidth: 2,
                    borderColor: "#ffffff",
                    borderOpacity: 1,
                },
            },
        },
    };
};
export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return { theme, colorMode, mode };
};