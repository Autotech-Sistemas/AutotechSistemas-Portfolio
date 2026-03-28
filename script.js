/* ─── PROJECTS DATA ──────────────────────────────────────── */
const projects = [
	{
		id: 0,
		cat: "Site Institucional",
		title: "AutoMec — Site institucional para oficinas mecânicas",
		client: "Projeto Demonstração",
		year: 2026,
		desc: "Demonstração de site institucional desenvolvido para oficinas mecânicas que querem profissionalizar sua presença online. Apresenta serviços, depoimentos de clientes, galeria de fotos, formulário de contato e localização — tudo pensado para converter visitantes em clientes.",
		techs: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"Google Maps API",
			"WhatsApp API",
		],
		features: [
			"Apresentação completa dos serviços da oficina",
			"Galeria de fotos dos serviços realizados",
			"Depoimentos de clientes com foto e avaliação",
			"Formulário de contato e solicitação de orçamento",
			"Integração com Google Maps para localização",
			"Botão de WhatsApp para atendimento imediato",
		],
		metrics: [
			{ val: "+Visibilidade", lbl: "no Google", color: "red" },
			{ val: "+Clientes", lbl: "pelo site", color: "yellow" },
			{ val: "+Credibilidade", lbl: "com clientes", color: "blue" },
		],
		imgSrc: "img/automec.png",
		link: "https://automec.autotechsistemas.com.br/",
	},
	{
		id: 2,
		cat: "ERP",
		title: "AutoStock — Gestão de Veículos e Frota",
		client: "Projeto Demonstração",
		year: 2025,
		desc: "Demonstração de sistema ERP para gestão completa de frotas e veículos. Controle de entrada e saída, histórico de manutenções, alertas automáticos e relatórios gerenciais — tudo em uma plataforma intuitiva para equipes de qualquer tamanho.",
		techs: ["React", "Node.js", "PostgreSQL", "Redis", "Chart.js"],
		features: [
			"Cadastro e controle completo da frota de veículos",
			"Histórico de manutenções preventivas e corretivas",
			"Alertas automáticos de revisão por hodômetro/data",
			"Dashboard gerencial com KPIs em tempo real",
			"Relatórios exportáveis em PDF e Excel",
			"Controle de motoristas e documentação",
		],
		metrics: [
			{ val: "−Retrabalho", lbl: "operacional", color: "red" },
			{ val: "+Controle", lbl: "da frota", color: "yellow" },
			{ val: "+Agilidade", lbl: "no dia a dia", color: "blue" },
		],
		imgSrc: "img/autostock.png",
		link: null,
	},
	{
		id: 3,
		cat: "E-commerce",
		title: "E-Shop — E-commerce de Itens Veiculares",
		client: "Projeto Demonstração",
		year: 2024,
		desc: "Demonstração de loja virtual especializada em peças e acessórios automotivos. Catálogo organizado por categoria, busca por veículo, carrinho otimizado e integração com meios de pagamento — pronto para vender 24h por dia.",
		techs: ["Next.js", "Stripe", "PostgreSQL", "AWS S3", "Tailwind CSS"],
		features: [
			"Catálogo com filtros por categoria e compatibilidade",
			"Busca de peças por marca, modelo e ano do veículo",
			"Carrinho otimizado com cálculo de frete em tempo real",
			"Integração com Pix, cartão e boleto bancário",
			"Painel do lojista para gestão de pedidos e estoque",
			"Notificações automáticas de status do pedido",
		],
		metrics: [
			{ val: "24h", lbl: "Vendendo", color: "red" },
			{ val: "+Alcance", lbl: "de clientes", color: "yellow" },
			{ val: "−Esforço", lbl: "p/ vender", color: "blue" },
		],
		imgSrc: "img/eshop.png",
		link: null,
	},
	{
		id: 4,
		cat: "Sistema Web",
		title: "AutoCatalogo — Site institucional para concessionárias",
		client: "Projeto Demonstração",
		year: 2024,
		desc: "Demonstração de site institucional para concessionárias que precisam exibir seu estoque de forma profissional. Vitrine de veículos com filtros, ficha técnica detalhada, simulação de financiamento e integração com WhatsApp para atendimento imediato.",
		techs: ["Vue.js", "Laravel", "MySQL", "AWS", "WhatsApp API"],
		features: [
			"Vitrine de veículos com filtros por tipo, marca e preço",
			"Ficha técnica completa com galeria de fotos",
			"Simulador de financiamento integrado",
			"Chat e botão de WhatsApp para atendimento imediato",
			"Painel administrativo para gestão do estoque",
			"SEO otimizado para aparecer no Google",
		],
		metrics: [
			{ val: "+Leads", lbl: "qualificados", color: "red" },
			{ val: "+Vendas", lbl: "pelo digital", color: "yellow" },
			{ val: "−Tempo", lbl: "p/ fechar", color: "blue" },
		],
		imgSrc: "img/autocatalogo.png",
		link: null,
	},
	{
		id: 5,
		cat: "E-commerce",
		title: "AutoPeças — E-commerce para lojas de autopeças",
		client: "Projeto Demonstração",
		year: 2026,
		desc: "Demonstração de e-commerce focado em lojas de autopeças que querem expandir as vendas para o online. Busca inteligente por modelo e ano do veículo, gestão de estoque integrada e experiência de compra rápida e segura.",
		techs: ["Next.js", "Node.js", "MongoDB", "Stripe", "Algolia"],
		features: [
			"Busca inteligente de peças por modelo e ano do veículo",
			"Catálogo com mais de 10.000 SKUs cadastrados",
			"Gestão de estoque integrada ao painel do lojista",
			"Checkout simplificado com Pix, cartão e boleto",
			"Programa de fidelidade e cupons de desconto",
			"App mobile para gestão de pedidos em tempo real",
		],
		metrics: [
			{ val: "+Vendas", lbl: "online", color: "red" },
			{ val: "+Alcance", lbl: "nacional", color: "yellow" },
			{ val: "−Ociosidade", lbl: "do estoque", color: "blue" },
		],
		imgSrc: "img/autopecas.png",
		link: "https://autopecas.autotechsistemas.com.br/",
	},
	{
        id: 6,
        cat: "Site Institucional",
        title: "AutoEstética — Detailing de Luxo & Proteção Cerâmica",
        client: "Projeto Demonstração",
        year: 2026,
        desc: "Plataforma digital com agendamento integrado para serviços de polimento espelhado, proteção cerâmica, películas PPF e higienização a vapor focada em veículos de alto padrão.",
        techs: ["HTML5", "CSS3", "JavaScript", "Schema.org", "Tailwind CSS"],
        features: [
            "Agendamento de serviços integrado",
            "Catálogo detalhado de pacotes (Essencial, Premium, Elite)",
            "Galeria de portfólio dividida por categorias",
            "FAQ interativo",
        ],
        metrics: [
            { val: "+Brilho", lbl: "intenso", color: "red" },
            { val: "+Proteção", lbl: "cerâmica", color: "yellow" },
            { val: "−Riscos", lbl: "na pintura", color: "blue" },
        ],
        imgSrc: "img/autoestetica.png",
        link: "https://autoestetica.autotechsistemas.com.br/",
    },
	{
		id: 7,
		cat: "ERP / Desktop",
		title: "AutoEstoque — Controle de Estoque Industrial",
		client: "Projeto Demonstração",
		year: 2023,
		desc: "Demonstração de sistema ERP desktop para controle de estoque em ambientes industriais e automotivos. Entrada e saída por código de barras, rastreabilidade de lote, alertas de reposição e relatórios de consumo por setor — zero divergência de inventário.",
		techs: [
			"Delphi",
			"Firebird",
			"Leitor de Código de Barras",
			"Crystal Reports",
		],
		features: [
			"Entrada e saída de itens com leitura de código de barras",
			"Rastreabilidade completa de lote por fornecedor",
			"Alertas automáticos de reposição de estoque mínimo",
			"Relatórios de consumo por setor e centro de custo",
			"Inventário rotativo com contagem cega",
			"Custo médio ponderado atualizado em tempo real",
		],
		metrics: [
			{ val: "−Divergências", lbl: "no estoque", color: "red" },
			{ val: "+Rastreio", lbl: "por lote", color: "yellow" },
			{ val: "−Perdas", lbl: "de material", color: "blue" },
		],
		imgSrc: "img/autoestoque.png",
		link: null,
	},
];

/* ─── COUNTER ANIMATION ──────────────────────────────────── */
(function () {
	const el = document.getElementById("countProj");
	if (!el) return;
	let n = 0;
	const target = projects.length;
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		el.innerHTML = target + "<span>+</span>";
		el.setAttribute("aria-label", `Mais de ${target} projetos entregues`);
		return;
	}
	const t = setInterval(() => {
		n++;
		el.innerHTML = n + "<span aria-hidden='true'>+</span>";
		el.setAttribute("aria-label", `Mais de ${n} projetos entregues`);
		if (n >= target) clearInterval(t);
	}, 80);
})();

/* ─── HAMBURGER MENU ─────────────────────────────────────── */
(function () {
	const hamburger = document.getElementById("navHamburger");
	const mobileMenu = document.getElementById("mobileMenu");
	if (!hamburger || !mobileMenu) return;

	let isOpen = false;

	function openMenu() {
		isOpen = true;
		hamburger.setAttribute("aria-expanded", "true");
		hamburger.setAttribute("aria-label", "Fechar menu");
		mobileMenu.classList.add("open");
		document.body.style.overflow = "hidden";
		// Move foco para o primeiro link do menu
		const firstLink = mobileMenu.querySelector(".mob-link, .mob-cta");
		if (firstLink) setTimeout(() => firstLink.focus(), 50);
	}

	function closeMenu() {
		isOpen = false;
		hamburger.setAttribute("aria-expanded", "false");
		hamburger.setAttribute("aria-label", "Abrir menu");
		mobileMenu.classList.remove("open");
		document.body.style.overflow = "";
		hamburger.focus();
	}

	hamburger.addEventListener("click", () => {
		isOpen ? closeMenu() : openMenu();
	});

	// Fecha ao clicar em qualquer link do menu
	mobileMenu.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	// Fecha com ESC
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && isOpen) closeMenu();
	});

	// Fecha ao redimensionar para desktop
	window.addEventListener("resize", () => {
		if (window.innerWidth > 768 && isOpen) closeMenu();
	});

	// Trap de foco dentro do menu mobile
	mobileMenu.addEventListener("keydown", (e) => {
		if (e.key !== "Tab") return;
		const focusable = Array.from(
			mobileMenu.querySelectorAll("a, button"),
		).filter((el) => getComputedStyle(el).display !== "none");
		if (!focusable.length) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			hamburger.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			hamburger.focus();
		}
	});
})();

/* ─── SCROLL REVEAL (IntersectionObserver) ───────────────── */
(function () {
	// Respeita preferência de movimento reduzido
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		document.querySelectorAll(".proj-card").forEach((card) => {
			card.classList.add("in-view");
		});
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
					// Para de observar após revelar (one-shot)
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.08, // 8% visível já dispara
			rootMargin: "0px 0px -40px 0px", // pequena margem inferior
		},
	);

	document.querySelectorAll(".reveal").forEach((el) => {
		observer.observe(el);
	});

	// Re-observa cards que aparecem após filtro ser aplicado
	window.__reobserveCards = () => {
		document.querySelectorAll(".proj-card:not(.hidden)").forEach((card) => {
			if (!card.classList.contains("in-view")) {
				observer.observe(card);
			}
		});
	};
})();

/* ─── CARD IMAGE BEHAVIOR ────────────────────────────────── */
function initCardImages() {
	document.querySelectorAll(".proj-img").forEach((wrapper) => {
		const img = wrapper.querySelector("img");
		if (!img) return;

		const classify = () => {
			const containerH = wrapper.clientHeight;
			const naturalH = img.naturalHeight;
			const naturalW = img.naturalWidth;
			if (!naturalH || !containerH) return;

			const renderedH = (naturalH / naturalW) * wrapper.clientWidth;
			const ratio = renderedH / containerH;

			if (ratio >= 1.8) {
				wrapper.classList.add("is-tall");
				wrapper.classList.remove("is-short");
				const pct = ((renderedH - containerH) / renderedH) * 100;
				wrapper.style.setProperty(
					"--scroll-dist",
					`-${pct.toFixed(1)}%`,
				);
			} else {
				wrapper.classList.add("is-short");
				wrapper.classList.remove("is-tall");
			}
		};

		if (img.complete && img.naturalWidth) {
			classify();
		} else {
			img.addEventListener("load", classify);
		}
	});
}

window.addEventListener("resize", () => {
	document
		.querySelectorAll(".proj-img.is-tall, .proj-img.is-short")
		.forEach((w) => {
			w.classList.remove("is-tall", "is-short");
		});
	initCardImages();
});

initCardImages();

function handleNavLogo(input) {
	const file = input.files[0];
	if (!file) return;
	const r = new FileReader();
	r.onload = (e) => {
		const img = document.getElementById("navLogoImg");
		img.src = e.target.result;
		img.classList.add("show");
		const wordmark = document.getElementById("navWordmark");
		if (wordmark) wordmark.style.display = "none";
	};
	r.readAsDataURL(file);
}

/* ─── FILTER ─────────────────────────────────────────────── */
document.querySelectorAll(".filter-btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelectorAll(".filter-btn").forEach((b) => {
			b.classList.remove("active");
			b.setAttribute("aria-pressed", "false");
		});
		btn.classList.add("active");
		btn.setAttribute("aria-pressed", "true");

		const filter = btn.dataset.filter;
		const cards = document.querySelectorAll(".proj-card");
		let visible = 0;

		cards.forEach((card) => {
			const match = filter === "all" || card.dataset.cat === filter;
			card.classList.toggle("hidden", !match);
			if (match) visible++;
		});

		const emptyState = document.getElementById("emptyState");
		emptyState.classList.toggle("show", visible === 0);
		emptyState.setAttribute(
			"aria-label",
			visible === 0
				? "Nenhum projeto encontrado nesta categoria."
				: `${visible} projeto${visible > 1 ? "s" : ""} encontrado${visible > 1 ? "s" : ""}.`,
		);

		// Re-observa cards recém-exibidos para scroll reveal
		if (window.__reobserveCards) window.__reobserveCards();
	});
});

/* ─── MODAL ──────────────────────────────────────────────── */
let lastFocusedElement = null;

function getFocusableElements(container) {
	return Array.from(
		container.querySelectorAll(
			'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])',
		),
	).filter(
		(el) =>
			!el.closest(".hidden") && getComputedStyle(el).display !== "none",
	);
}

function trapFocus(e) {
	const modal = document.getElementById("modal");
	const focusable = getFocusableElements(modal);
	if (!focusable.length) return;

	const first = focusable[0];
	const last = focusable[focusable.length - 1];

	if (e.key === "Tab") {
		if (e.shiftKey) {
			if (document.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		} else {
			if (document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}
}

document.querySelectorAll(".proj-card").forEach((card) => {
	card.addEventListener("click", (e) => {
		if (e.target.closest("a.proj-arrow")) return;
		openModal(parseInt(card.dataset.id));
	});

	card.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			if (e.target.closest("a.proj-arrow")) return;
			openModal(parseInt(card.dataset.id));
		}
	});
});

function openModal(id) {
	const p = projects.find((proj) => proj.id === id);
	if (!p) return;

	lastFocusedElement = document.activeElement;

	const imgEl = document.getElementById("modalImg");
	imgEl.innerHTML = p.imgSrc
		? `<img src="${p.imgSrc}" alt="Imagem do projeto ${p.title}" class="loaded">`
		: `<div class="modal-img-placeholder">
				<svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4 4-6 6 6"/></svg>
				<span>Sem imagem</span>
			</div>`;

	document.getElementById("modalCat").textContent = p.cat;
	document.getElementById("modalTitle").textContent = p.title;
	document.getElementById("modalClient").innerHTML =
		`<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
		 ${p.client} &nbsp;·&nbsp; ${p.year}`;
	document.getElementById("modalDesc").textContent = p.desc;

	document.getElementById("modalMetrics").innerHTML = p.metrics
		.map(
			(m) =>
				`<div class="modal-metric">
					<div class="val" style="color:var(--${m.color})">${m.val}</div>
					<div class="lbl">${m.lbl}</div>
				</div>`,
		)
		.join("");

	document.getElementById("modalFeats").innerHTML = p.features
		.map((f) => `<div class="modal-feat">${f}</div>`)
		.join("");

	const overlay = document.getElementById("modalOverlay");
	overlay.classList.add("open");
	overlay.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden";

	const titleEl = document.getElementById("modalTitle");
	titleEl.setAttribute("tabindex", "-1");
	titleEl.focus();

	document.addEventListener("keydown", trapFocus);
}

function closeModal(e) {
	if (
		e &&
		e.target !== document.getElementById("modalOverlay") &&
		!e.target.closest(".modal-close")
	)
		return;

	_doCloseModal();
}

function _doCloseModal() {
	const overlay = document.getElementById("modalOverlay");
	overlay.classList.remove("open");
	overlay.setAttribute("aria-hidden", "true");
	document.body.style.overflow = "";

	document.removeEventListener("keydown", trapFocus);

	if (lastFocusedElement) {
		lastFocusedElement.focus();
		lastFocusedElement = null;
	}
}

document.addEventListener("keydown", (e) => {
	if (
		e.key === "Escape" &&
		document.getElementById("modalOverlay").classList.contains("open")
	) {
		_doCloseModal();
	}
});
