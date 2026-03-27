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
	// Respeita prefers-reduced-motion
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

/* ─── CARD IMAGE BEHAVIOR ────────────────────────────────── */
/**
 * Para cada .proj-img com <img>:
 *   - Se a imagem natural for >= 1.8x a altura do container → .is-tall (scroll)
 *     e calcula --scroll-dist exato para chegar ao fundo.
 *   - Caso contrário → .is-short (zoom).
 */
function initCardImages() {
	document.querySelectorAll(".proj-img").forEach((wrapper) => {
		const img = wrapper.querySelector("img");
		if (!img) return;

		const classify = () => {
			const containerH = wrapper.clientHeight;
			const naturalH = img.naturalHeight;
			const naturalW = img.naturalWidth;
			if (!naturalH || !containerH) return;

			// Altura que a imagem vai ocupar quando width:100%
			const renderedH = (naturalH / naturalW) * wrapper.clientWidth;
			const ratio = renderedH / containerH;

			if (ratio >= 1.8) {
				wrapper.classList.add("is-tall");
				wrapper.classList.remove("is-short");
				// translateY negativo para chegar ao fundo:
				// deslocamento = (renderedH - containerH) / renderedH * 100 (em %)
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

// Reclassifica se a janela for redimensionada (grid muda de largura)
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
		// Atualiza estado visual e aria-pressed
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

		// Anuncia resultado para leitores de tela
		emptyState.setAttribute(
			"aria-label",
			visible === 0
				? "Nenhum projeto encontrado nesta categoria."
				: `${visible} projeto${visible > 1 ? "s" : ""} encontrado${visible > 1 ? "s" : ""}.`,
		);
	});
});

/* ─── MODAL ──────────────────────────────────────────────── */

// Elemento que abriu o modal (para restaurar foco ao fechar)
let lastFocusedElement = null;

// Todos os elementos focáveis dentro do modal
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

// Trap de foco: mantém o foco dentro do modal enquanto estiver aberto
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
	// Clique
	card.addEventListener("click", (e) => {
		// Evita abrir modal se o clique foi no link direto (proj-arrow <a>)
		if (e.target.closest("a.proj-arrow")) return;
		openModal(parseInt(card.dataset.id));
	});

	// Teclado: Enter e Espaço abrem o modal
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

	// Guarda quem abriu para restaurar foco depois
	lastFocusedElement = document.activeElement;

	// Imagem
	const imgEl = document.getElementById("modalImg");
	imgEl.innerHTML = p.imgSrc
		? `<img src="${p.imgSrc}" alt="Imagem do projeto ${p.title}" class="loaded">`
		: `<div class="modal-img-placeholder">
				<svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4 4-6 6 6"/></svg>
				<span>Sem imagem</span>
			</div>`;

	// Conteúdo
	document.getElementById("modalCat").textContent = p.cat;
	document.getElementById("modalTitle").textContent = p.title;
	document.getElementById("modalClient").innerHTML =
		`<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
		 ${p.client} &nbsp;·&nbsp; ${p.year}`;
	document.getElementById("modalDesc").textContent = p.desc;

	// Métricas
	document.getElementById("modalMetrics").innerHTML = p.metrics
		.map(
			(m) =>
				`<div class="modal-metric">
					<div class="val" style="color:var(--${m.color})">${m.val}</div>
					<div class="lbl">${m.lbl}</div>
				</div>`,
		)
		.join("");

	// Tecnologias
	document.getElementById("modalTechs").innerHTML = p.techs
		.map((t) => `<span class="modal-tag">${t}</span>`)
		.join("");

	// Funcionalidades
	document.getElementById("modalFeats").innerHTML = p.features
		.map((f) => `<div class="modal-feat">${f}</div>`)
		.join("");

	// Abre o overlay
	const overlay = document.getElementById("modalOverlay");
	overlay.classList.add("open");
	overlay.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden";

	// Move foco para o título do modal
	const titleEl = document.getElementById("modalTitle");
	titleEl.setAttribute("tabindex", "-1");
	titleEl.focus();

	// Ativa trap de foco
	document.addEventListener("keydown", trapFocus);
}

function closeModal(e) {
	// Fecha só se clicou no overlay em si ou no botão fechar
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

	// Remove trap de foco
	document.removeEventListener("keydown", trapFocus);

	// Restaura foco para o elemento que abriu o modal
	if (lastFocusedElement) {
		lastFocusedElement.focus();
		lastFocusedElement = null;
	}
}

// ESC fecha o modal
document.addEventListener("keydown", (e) => {
	if (
		e.key === "Escape" &&
		document.getElementById("modalOverlay").classList.contains("open")
	) {
		_doCloseModal();
	}
});
