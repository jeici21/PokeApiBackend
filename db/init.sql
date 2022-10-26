--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;


ALTER DATABASE pokeapi OWNER TO "userLocalDev";

\connect pokeapi

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pokemons; Type: TABLE; Schema: public; Owner: userLocalDev
--

CREATE TABLE public.pokemons (
    id integer NOT NULL,
    name character varying(140) NOT NULL,
    description text NOT NULL,
    height integer,
    weight integer,
    image character varying(200)
);


ALTER TABLE public.pokemons OWNER TO "userLocalDev";

--
-- Name: pokemons_evolves; Type: TABLE; Schema: public; Owner: userLocalDev
--

CREATE TABLE public.pokemons_evolves (
    id integer NOT NULL,
    "fromPokemonId" integer,
    "toPokemonId" integer
);


ALTER TABLE public.pokemons_evolves OWNER TO "userLocalDev";

--
-- Name: pokemons_evolves_id_seq; Type: SEQUENCE; Schema: public; Owner: userLocalDev
--

CREATE SEQUENCE public.pokemons_evolves_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemons_evolves_id_seq OWNER TO "userLocalDev";

--
-- Name: pokemons_evolves_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userLocalDev
--

ALTER SEQUENCE public.pokemons_evolves_id_seq OWNED BY public.pokemons_evolves.id;


--
-- Name: pokemons_id_seq; Type: SEQUENCE; Schema: public; Owner: userLocalDev
--

CREATE SEQUENCE public.pokemons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemons_id_seq OWNER TO "userLocalDev";

--
-- Name: pokemons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userLocalDev
--

ALTER SEQUENCE public.pokemons_id_seq OWNED BY public.pokemons.id;


--
-- Name: pokemons_types; Type: TABLE; Schema: public; Owner: userLocalDev
--

CREATE TABLE public.pokemons_types (
    id integer NOT NULL,
    "pokemonId" integer,
    "typeId" integer
);


ALTER TABLE public.pokemons_types OWNER TO "userLocalDev";

--
-- Name: pokemons_types_id_seq; Type: SEQUENCE; Schema: public; Owner: userLocalDev
--

CREATE SEQUENCE public.pokemons_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemons_types_id_seq OWNER TO "userLocalDev";

--
-- Name: pokemons_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userLocalDev
--

ALTER SEQUENCE public.pokemons_types_id_seq OWNED BY public.pokemons_types.id;


--
-- Name: types; Type: TABLE; Schema: public; Owner: userLocalDev
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(140) NOT NULL
);


ALTER TABLE public.types OWNER TO "userLocalDev";

--
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: userLocalDev
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.types_id_seq OWNER TO "userLocalDev";

--
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userLocalDev
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- Name: pokemons id; Type: DEFAULT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons ALTER COLUMN id SET DEFAULT nextval('public.pokemons_id_seq'::regclass);


--
-- Name: pokemons_evolves id; Type: DEFAULT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_evolves ALTER COLUMN id SET DEFAULT nextval('public.pokemons_evolves_id_seq'::regclass);


--
-- Name: pokemons_types id; Type: DEFAULT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_types ALTER COLUMN id SET DEFAULT nextval('public.pokemons_types_id_seq'::regclass);


--
-- Name: types id; Type: DEFAULT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- Data for Name: pokemons; Type: TABLE DATA; Schema: public; Owner: userLocalDev
--

COPY public.pokemons (id, name, description, height, weight, image) FROM stdin;
1	Bulbasaur	Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.\n\nIt evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.\n\nAlong with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen. 	7	69	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
2	Ivysaur	Ivysaur (Japanese: フシギソウ Fushigisou) is a dual-type Grass/Poison Pokémon introduced in Generation I.  It evolves from Bulbasaur starting at level 16 and evolves into Venusaur starting at level 32. 	10	130	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png
3	Venusaur	Venusaur (Japanese: フシギバナ Fushigibana) is a dual-type Grass/Poison Pokémon introduced in Generation I.\n\nIt evolves from Ivysaur starting at level 32. It is the final form of Bulbasaur.\n\nVenusaur has two other forms.\n\n    * It can Mega Evolve into Mega Venusaur using the Venusaurite.\n    * It has a Gigantamax form that was introduced in The Isle of Armor.\n\nVenusaur is the game mascot of both Pokémon Green and LeafGreen, appearing on the box art of both. 	20	1000	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png
\.


--
-- Data for Name: pokemons_evolves; Type: TABLE DATA; Schema: public; Owner: userLocalDev
--

COPY public.pokemons_evolves (id, "fromPokemonId", "toPokemonId") FROM stdin;
1	1	2
2	1	3
\.


--
-- Data for Name: pokemons_types; Type: TABLE DATA; Schema: public; Owner: userLocalDev
--

COPY public.pokemons_types (id, "pokemonId", "typeId") FROM stdin;
1	1	12
2	1	4
3	2	12
4	2	4
5	3	12
6	3	4
\.


--
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: userLocalDev
--

COPY public.types (id, name) FROM stdin;
1	Normal
2	Fighting
3	Flying
4	Poison
5	Ground
6	Rock
7	Bug
8	Ghost
9	Steel
10	Fire
11	Water
12	Grass
13	Electric
14	Psychic
15	Ice
16	Dragon
17	Dark
18	Fairy
19	Unknown
20	Shadow
\.


--
-- Name: pokemons_evolves_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userLocalDev
--

SELECT pg_catalog.setval('public.pokemons_evolves_id_seq', 1, false);


--
-- Name: pokemons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userLocalDev
--

SELECT pg_catalog.setval('public.pokemons_id_seq', 1, false);


--
-- Name: pokemons_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userLocalDev
--

SELECT pg_catalog.setval('public.pokemons_types_id_seq', 1, false);


--
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userLocalDev
--

SELECT pg_catalog.setval('public.types_id_seq', 1, false);


--
-- Name: pokemons_evolves pokemons_evolves_pkey; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_evolves
    ADD CONSTRAINT pokemons_evolves_pkey PRIMARY KEY (id);


--
-- Name: pokemons pokemons_name_key; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_name_key UNIQUE (name);


--
-- Name: pokemons pokemons_pkey; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_pkey PRIMARY KEY (id);


--
-- Name: pokemons_types pokemons_types_pkey; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_types
    ADD CONSTRAINT pokemons_types_pkey PRIMARY KEY (id);


--
-- Name: pokemons_types pokemons_types_pokemonId_typeId_key; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_types
    ADD CONSTRAINT "pokemons_types_pokemonId_typeId_key" UNIQUE ("pokemonId", "typeId");


--
-- Name: types types_name_key; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_name_key UNIQUE (name);


--
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- Name: pokemons_evolves pokemons_evolves_fromPokemonId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_evolves
    ADD CONSTRAINT "pokemons_evolves_fromPokemonId_fkey" FOREIGN KEY ("fromPokemonId") REFERENCES public.pokemons(id);


--
-- Name: pokemons_evolves pokemons_evolves_toPokemonId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_evolves
    ADD CONSTRAINT "pokemons_evolves_toPokemonId_fkey" FOREIGN KEY ("toPokemonId") REFERENCES public.pokemons(id);


--
-- Name: pokemons_types pokemons_types_pokemonId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_types
    ADD CONSTRAINT "pokemons_types_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES public.pokemons(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pokemons_types pokemons_types_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: userLocalDev
--

ALTER TABLE ONLY public.pokemons_types
    ADD CONSTRAINT "pokemons_types_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: userLocalDev
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO "userLocalDev";

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: userLocalDev
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

