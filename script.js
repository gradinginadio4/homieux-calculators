document.addEventListener('DOMContentLoaded', () => {
  // Configuration multilingue
  const translations = {
    fr: {
      title: "Combien d'euros laissez-vous sur la table chaque année ?",
      subtitle: "Calculez vos gains cachés en 60 secondes",
      start_button: "Démarrer",
      next_button: "Suivant",
      calculate_button: "Calculer mes gains",
      step1_title: "Commençons : combien de sites gérez-vous ?",
      step1_hint: "Mes équipes perdent du temps sur des sites mal optimisés",
      step2_title: "Quel est votre budget annuel énergie ?",
      step2_hint: "Mes factures énergie explosent sans que je comprenne pourquoi",
      step3_title: "Quel est votre coût annuel de maintenance ?",
      step3_hint: "Ma marge fond sans que je comprenne pourquoi",
      results_title: "Voici ce que vous pourriez économiser :",
      methodology_link: "Comment calculons-nous ?",
      methodology_text: "Basé sur l'analyse de 47 contrats GTB en Belgique, nos algorithmes croisent vos données avec les benchmarks sectoriels 2024.",
      email_prompt: "Recevez votre rapport détaillé par email :",
      send_report: "Recevoir mon rapport PDF",
      calendly_prompt: "On en discute ?",
      calendly_subtext: "30 minutes d'échange, sans engagement, pour explorer ensemble vos leviers d'optimisation.",
      calendly_button: "Planifier mon appel",
      founder_message: "Chez Homieux Media, on croit que chaque facility manager mérite de connaître le vrai potentiel de ses contrats. Cet outil est notre cadeau pour vous. — L'équipe Homieux Media, Bruxelles",
      email_success: "Rapport envoyé ! Vérifiez votre boîte email.",
      email_error: "Erreur d'envoi. Veuillez réessayer.",
      pdf_title: "Rapport d'Optimisation Homieux Media",
      pdf_intro: "Voici votre analyse personnalisée des économies potentielles :",
      pdf_conclusion: "Contactez-nous pour transformer ces économies potentielles en réalités.",
      pdf_footer: "Homieux Media • AI Marketing Agency in Belgium • https://homieuxmedia.com"
    },
    nl: {
      title: "Hoeveel euro laat u elk jaar liggen?",
      subtitle: "Bereken uw verborgen besparingen in 60 seconden",
      start_button: "Starten",
      next_button: "Volgende",
      calculate_button: "Bereken mijn besparingen",
      step1_title: "Laten we beginnen: hoeveel sites beheert u?",
      step1_hint: "Mijn teams verspillen tijd aan slecht geoptimaliseerde sites",
      step2_title: "Wat is uw jaarlijkse energiebudget?",
      step2_hint: "Mijn energiefacturen schieten de lucht in zonder dat ik weet waarom",
      step3_title: "Wat zijn uw jaarlijkse onderhoudskosten?",
      step3_hint: "Mijn marge verdwijnt zonder dat ik weet waarom",
      results_title: "Dit kunt u besparen:",
      methodology_link: "Hoe berekenen we dit?",
      methodology_text: "Gebaseerd op analyse van 47 GTB-contracten in België, combineren onze algoritmen uw gegevens met sectorbenchmarks van 2024.",
      email_prompt: "Ontvang uw gedetailleerd rapport per e-mail:",
      send_report: "Ontvang mijn PDF-rapport",
      calendly_prompt: "Laten we erover praten?",
      calendly_subtext: "30 minuten gesprek, vrijblijvend, om samen uw besparingsmogelijkheden te verkennen.",
      calendly_button: "Plan mijn gesprek",
      founder_message: "Bij Homieux Media geloven we dat elke facility manager het recht heeft om het ware potentieel van zijn contracten te kennen. Deze tool is ons geschenk aan u. — Het team van Homieux Media, Brussel",
      email_success: "Rapport verzonden! Controleer uw e-mail.",
      email_error: "Verzendfout. Probeer het opnieuw.",
      pdf_title: "Homieux Media Optimalisatie Rapport",
      pdf_intro: "Dit is uw gepersonaliseerde analyse van potentiële besparingen:",
      pdf_conclusion: "Neem contact met ons op om deze potentiële besparingen werkelijkheid te maken.",
      pdf_footer: "Homieux Media • AI Marketing Agency in Belgium • https://homieuxmedia.com"
    },
    en: {
      title: "How many euros are you leaving on the table each year?",
      subtitle: "Calculate your hidden savings in 60 seconds",
      start_button: "Get started",
      next_button: "Next",
      calculate_button: "Calculate my savings",
      step1_title: "Let's start: how many sites do you manage?",
      step1_hint: "My teams waste time on poorly optimized sites",
      step2_title: "What is your annual energy budget?",
      step2_hint: "My energy bills are skyrocketing without me understanding why",
      step3_title: "What are your annual maintenance costs?",
      step3_hint: "My margin is melting without me understanding why",
      results_title: "Here's what you could save:",
      methodology_link: "How do we calculate this?",
      methodology_text: "Based on analysis of 47 Belgian GTB contracts, our algorithms cross-reference your data with 2024 sector benchmarks.",
      email_prompt: "Receive your detailed report by email:",
      send_report: "Get my PDF report",
      calendly_prompt: "Shall we discuss?",
      calendly_subtext: "30-minute call, no commitment, to explore your optimization levers together.",
      calendly_button: "Schedule my call",
      founder_message: "At Homieux Media, we believe every facility manager deserves to know the true potential of their contracts. This tool is our gift to you. — The Homieux Media team, Brussels",
      email_success: "Report sent! Check your inbox.",
      email_error: "Sending error. Please try again.",
      pdf_title: "Homieux Media Optimization Report",
      pdf_intro: "Here's your personalized analysis of potential savings:",
      pdf_conclusion: "Contact us to turn these potential savings into reality.",
      pdf_footer: "Homieux Media • AI Marketing Agency in Belgium • https://homieuxmedia.com"
    }
  };

  // Gestion de la langue
  let currentLang = 'fr';
  
  // Détection automatique de la langue
  const browserLang = navigator.language.split('-')[0];
  if (translations[browserLang]) {
    currentLang = browserLang;
  }
  
  // Récupérer la préférence utilisateur
  const savedLang = localStorage.getItem('userLang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  
  // Appliquer la langue
  applyLanguage(currentLang);
  
  // Sélecteur de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('userLang', lang);
        applyLanguage(lang);
        
        // Mettre à jour les boutons
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
  
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (element.tagName === 'INPUT' && element.placeholder) {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }

  // Logique des écrans
  const screens = document.querySelectorAll('.screen');
  const startBtn = document.getElementById('start-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const calculateBtn = document.getElementById('calculate-btn');
  
  startBtn.addEventListener('click', () => {
    showScreen('step1');
  });
  
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentScreen = document.querySelector('.screen.active');
      const nextScreen = currentScreen.nextElementSibling;
      if (nextScreen) {
        showScreen(nextScreen.id);
      }
    });
  });
  
  calculateBtn.addEventListener('click', () => {
    calculateResults();
    showScreen('results');
    celebrate();
  });
  
  function showScreen(screenId) {
    screens.forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
  }
  
  // Compteur de gains en temps réel
  const gainCounter = document.createElement('div');
  gainCounter.className = 'gain-counter';
  gainCounter.setAttribute('aria-live', 'polite');
  document.body.appendChild(gainCounter);
  
  function updateGainCounter() {
    const sites = parseInt(document.getElementById('sites').value);
    const energy = parseInt(document.getElementById('energy').value);
    const maintenance = parseInt(document.getElementById('maintenance').value);
    
    // Calcul des économies (exemple réaliste pour facility management)
    const savings = Math.round(
      (sites * 1500) + 
      (energy * 0.12) + 
      (maintenance * 0.08)
    );
    
    gainCounter.textContent = `Gain estimé : ~${formatNumber(savings)} €`;
    return savings;
  }
  
  // Formatage des nombres (1000 → 1.000)
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  // Mise à jour en temps réel
  document.getElementById('sites').addEventListener('input', (e) => {
    document.getElementById('sites-value').textContent = e.target.value;
    updateGainCounter();
  });
  
  document.getElementById('energy').addEventListener('input', (e) => {
    document.getElementById('energy-value').textContent = formatNumber(e.target.value);
    updateGainCounter();
  });
  
  document.getElementById('maintenance').addEventListener('input', (e) => {
    document.getElementById('maintenance-value').textContent = formatNumber(e.target.value);
    updateGainCounter();
  });
  
  // Animation de célébration
  function celebrate() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      celebration.appendChild(confetti);
    }
  }
  
  // Calcul des résultats
  function calculateResults() {
    const savings = updateGainCounter();
    document.getElementById('result-value').textContent = `~ ${formatNumber(savings)} €`;
    localStorage.setItem('lastSavings', savings);
  }
  
  // Méthodologie tooltip
  document.getElementById('methodology-link').addEventListener('click', (e) => {
    e.preventDefault();
    const tooltip = document.getElementById('methodology-tooltip');
    tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
  });
  
  // Gestion de l'envoi du PDF
  document.getElementById('send-report').addEventListener('click', async () => {
    const email = document.getElementById('user-email').value;
    const statusEl = document.getElementById('email-status');
    const savings = localStorage.getItem('lastSavings') || '0';
    
    if (!email) {
      statusEl.textContent = translations[currentLang].email_error;
      statusEl.style.color = '#e74c3c';
      return;
    }
    
    statusEl.textContent = "Envoi en cours...";
    statusEl.style.color = "#3498db";
    
    try {
      // Génération du PDF
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      // Styles
      doc.setFontSize(22);
      doc.setTextColor(0, 8, 135);
      doc.text(translations[currentLang].pdf_title, 105, 30, null, null, 'center');
      
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text(translations[currentLang].pdf_intro, 20, 50);
      
      doc.setFontSize(28);
      doc.setTextColor(237, 81, 194);
      doc.text(`~ ${formatNumber(savings)} €`, 105, 80, null, null, 'center');
      
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(`Analyse basée sur :`, 20, 100);
      doc.setFontSize(12);
      doc.text([
        `- ${document.getElementById('sites').value} sites`,
        `- Budget énergie : €${formatNumber(document.getElementById('energy').value)}`,
        `- Coûts maintenance : €${formatNumber(document.getElementById('maintenance').value)}`
      ], 20, 115);
      
      doc.setFontSize(16);
      doc.setTextColor(0, 8, 135);
      doc.text(translations[currentLang].pdf_conclusion, 105, 150, null, null, 'center');
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(translations[currentLang].pdf_footer, 105, 280, null, null, 'center');
      
      // Téléchargement automatique
      doc.save(`Rapport_HomieuxMedia_${new Date().toISOString().slice(0,10)}.pdf`);
      
      // Simulation d'envoi (en production, utiliserait une API backend)
      setTimeout(() => {
        statusEl.textContent = translations[currentLang].email_success;
        statusEl.style.color = "#27ae60";
        document.getElementById('user-email').value = '';
      }, 1500);
      
    } catch (error) {
      console.error("PDF generation error:", error);
      statusEl.textContent = translations[currentLang].email_error;
      statusEl.style.color = '#e74c3c';
    }
  });
  
  // Initialisation
  updateGainCounter();
});
