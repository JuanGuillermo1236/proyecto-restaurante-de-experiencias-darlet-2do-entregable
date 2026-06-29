--
-- PostgreSQL database dump
--

\restrict ALq6knmbip8ba5MEuAKvpdCrYhLto6Rd3E0gbJwt35PA9AtSNPDhRhFrrj7QuVY

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-06-29 11:08:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 222 (class 1259 OID 16401)
-- Name: experiencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.experiencias (
    id integer NOT NULL,
    region_id integer,
    titulo character varying(150) NOT NULL,
    descripcion text,
    categoria character varying(100),
    precio numeric(10,2),
    video character varying(300),
    invertida boolean DEFAULT false
);


ALTER TABLE public.experiencias OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16400)
-- Name: experiencias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.experiencias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.experiencias_id_seq OWNER TO postgres;

--
-- TOC entry 5037 (class 0 OID 0)
-- Dependencies: 221
-- Name: experiencias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.experiencias_id_seq OWNED BY public.experiencias.id;


--
-- TOC entry 220 (class 1259 OID 16390)
-- Name: regiones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regiones (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text
);


ALTER TABLE public.regiones OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16389)
-- Name: regiones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regiones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regiones_id_seq OWNER TO postgres;

--
-- TOC entry 5038 (class 0 OID 0)
-- Dependencies: 219
-- Name: regiones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regiones_id_seq OWNED BY public.regiones.id;


--
-- TOC entry 224 (class 1259 OID 16417)
-- Name: reservas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservas (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    correo character varying(100) NOT NULL,
    telefono character varying(20),
    fecha date,
    comensales integer,
    mensaje text,
    region_id integer,
    fecha_registro timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.reservas OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16416)
-- Name: reservas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reservas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reservas_id_seq OWNER TO postgres;

--
-- TOC entry 5039 (class 0 OID 0)
-- Dependencies: 223
-- Name: reservas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reservas_id_seq OWNED BY public.reservas.id;


--
-- TOC entry 4867 (class 2604 OID 16404)
-- Name: experiencias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiencias ALTER COLUMN id SET DEFAULT nextval('public.experiencias_id_seq'::regclass);


--
-- TOC entry 4866 (class 2604 OID 16393)
-- Name: regiones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiones ALTER COLUMN id SET DEFAULT nextval('public.regiones_id_seq'::regclass);


--
-- TOC entry 4869 (class 2604 OID 16420)
-- Name: reservas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservas ALTER COLUMN id SET DEFAULT nextval('public.reservas_id_seq'::regclass);


--
-- TOC entry 5029 (class 0 OID 16401)
-- Dependencies: 222
-- Data for Name: experiencias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.experiencias (id, region_id, titulo, descripcion, categoria, precio, video, invertida) FROM stdin;
1	1	BRISA DEL PACÍFICO	Una degustación de 5 momentos inspirada en la riqueza del océano peruano. Ceviche premium de pesca del día, leche de tigre cítrica y delicados tiraditos bañados en ají amarillo y maracuyá, creando una experiencia fresca, elegante y profundamente costera.	EXPERIENCIA MARINA	185.00	videos/1experiencia_costa.mp4	f
2	1	SABOR DE BARRIO Y FUEGO	Una celebración de la cocina criolla limeña con sabores intensos y técnicas contemporáneas. Lomo saltado flameado al wok, reducción de sillao artesanal, papas crocantes y aromas ahumados que evocan las tradicionales cocinas del Perú.	EXPERIENCIA CRIOLLA	145.00	videos/2experiencia_costa.mp4	t
3	1	SUSPIRO DE LIMA NOCTURNA	Una experiencia de postres inspirada en la elegancia limeña. Suspiro a la limeña infusionado con vainilla natural, crujientes de canela y reducción de oporto, acompañado de helado artesanal de lúcuma para cerrar el recorrido gastronómico frente al mar.	EXPERIENCIA DULCE COSTERA	125.00	videos/3experiencia_costa.mp4	f
4	2	SINFONÍA DE ALTURA LÍQUIDA	Una degustación de 5 momentos a base de cocción lenta de 12 horas que extrae la esencia de los pastizales andinos y sales volcánicas. Servido con papas nativas seleccionadas, morallas y el aroma inconfundible de la muña fresca para reconfortar el espíritu.	EXPERIENCIA DE SOPAS	185.00	videos/1experiencia.mp4	f
5	2	TRILOGÍA DE MAÍZ Y CRUJIENTES	Una degustación de 5 momentos que celebra la versatilidad del grano andino. Desde el crujiente de quinua negra hasta la suavidad de una humita de choclo tierno hecha a mano. Finalizando con una panceta premium glaseada en reducción de chicha de jora, conectando técnicas ancestrales con la elegancia contemporánea.	EXPERIENCIA DE GRANOS Y TEXTURAS	145.00	videos/2experiencia.mp4	t
6	2	LEGADO DE LA TIERRA Y FUEGO	Una inmersión de 5 momentos en el alma de los valles interandinos. Desde la suavidad de un guiso de setas silvestres hasta la intensidad de una carne macerada por 24 horas en vinagre de chicha de jora y especias secretas. Cada preparación captura el jugo y la esencia de los ingredientes que han alimentado generaciones, servido con el aroma del horno de piedra.	EXPERIENCIA DE ESENCIAS	125.00	videos/3experiencia.mp4	f
7	3	ESENCIA DEL PAICHE DORADO	Una degustación de 5 momentos inspirada en los grandes ríos amazónicos. El paiche premium es cocinado lentamente sobre hojas de bijao y acompañado por cremas de cocona ahumada y yuca crocante, resaltando el equilibrio entre frescura, humo y tradición ancestral.	EXPERIENCIA DE RÍO AMAZÓNICO	185.00	videos/1experiencia_selva.mp4	f
8	3	JARDÍN DE CAMU Y COCONA	Una propuesta de sabores cítricos y tropicales que combina camu camu, copoazú y cocona en distintas texturas. Desde emulsiones ligeras hasta glaseados artesanales, cada plato transmite la energía viva y exótica de la Amazonía peruana.	EXPERIENCIA DE FRUTOS AMAZÓNICOS	145.00	videos/2experiencia_selva.mp4	t
9	3	MEMORIA DEL BIJAO ANCESTRAL	Una inmersión gastronómica en las técnicas tradicionales de la selva. Carnes maceradas en especias amazónicas y cocidas en hojas de bijao sobre fuego lento, acompañadas de plátano bellaco caramelizado y reducción de sachaculantro.	EXPERIENCIA DE FUEGO Y HOJAS	125.00	videos/3experiencia_selva.mp4	f
\.


--
-- TOC entry 5027 (class 0 OID 16390)
-- Dependencies: 220
-- Data for Name: regiones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regiones (id, nombre, descripcion) FROM stdin;
1	Costa	Sabores marinos y criollos
2	Sierra	Tradición andina
3	Selva	Gastronomía amazónica
\.


--
-- TOC entry 5031 (class 0 OID 16417)
-- Dependencies: 224
-- Data for Name: reservas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservas (id, nombre, correo, telefono, fecha, comensales, mensaje, region_id, fecha_registro) FROM stdin;
1	juan guillermo	juanguillermo@gmail.com	958237285	2026-07-15	2	mesa junto a la ventana 	1	2026-06-29 07:26:00.248267
\.


--
-- TOC entry 5040 (class 0 OID 0)
-- Dependencies: 221
-- Name: experiencias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.experiencias_id_seq', 9, true);


--
-- TOC entry 5041 (class 0 OID 0)
-- Dependencies: 219
-- Name: regiones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regiones_id_seq', 3, true);


--
-- TOC entry 5042 (class 0 OID 0)
-- Dependencies: 223
-- Name: reservas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reservas_id_seq', 1, true);


--
-- TOC entry 4874 (class 2606 OID 16410)
-- Name: experiencias experiencias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiencias
    ADD CONSTRAINT experiencias_pkey PRIMARY KEY (id);


--
-- TOC entry 4872 (class 2606 OID 16399)
-- Name: regiones regiones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiones
    ADD CONSTRAINT regiones_pkey PRIMARY KEY (id);


--
-- TOC entry 4876 (class 2606 OID 16428)
-- Name: reservas reservas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_pkey PRIMARY KEY (id);


--
-- TOC entry 4877 (class 2606 OID 16411)
-- Name: experiencias experiencias_region_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experiencias
    ADD CONSTRAINT experiencias_region_id_fkey FOREIGN KEY (region_id) REFERENCES public.regiones(id);


--
-- TOC entry 4878 (class 2606 OID 16429)
-- Name: reservas reservas_region_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_region_id_fkey FOREIGN KEY (region_id) REFERENCES public.regiones(id);


-- Completed on 2026-06-29 11:08:38

--
-- PostgreSQL database dump complete
--

\unrestrict ALq6knmbip8ba5MEuAKvpdCrYhLto6Rd3E0gbJwt35PA9AtSNPDhRhFrrj7QuVY

