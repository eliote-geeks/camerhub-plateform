import {
    AlarmClockOff,
    Bot,
    BrainCircuit,
    ChartSpline,
    Check,
    CircuitBoard,
    Clock3,
    MessageSquareText,
    Radar,
    Rocket,
    ShieldCheck,
    Sparkles,
    Workflow,
} from 'lucide-react';
import caseStudyData from '../../data/cases.json';

export type CaseStudy = (typeof caseStudyData)[number];

type ContactBadge = {
    label: string;
    value: string;
    tone?: 'focus';
};

export const heroStats = [
    { label: 'Workflows livrés', value: '+120' },
    { label: 'Temps de réponse', value: '< 3 min' },
    { label: 'Satisfaction', value: '4.9 / 5' },
    { label: 'Économies', value: '-40% coûts' },
] as const;

export const services = [
    {
        title: 'Automatisations IA sur-mesure',
        description: 'Workflows intelligents avec n8n, orchestration d’agents et intégration fine de vos outils métiers.',
        icon: BrainCircuit,
    },
    {
        title: 'Chatbots & voix augmentés',
        description: 'Assistants WhatsApp, web et téléphonie qui comprennent le contexte et résolvent les demandes en autonomie.',
        icon: Bot,
    },
    {
        title: 'Pilotage data & monitoring',
        description: 'Dashboards auto-générés, scoring en temps réel et alertes proactives pour sécuriser vos opérations IA.',
        icon: ChartSpline,
    },
    {
        title: 'Intégration API & micro-services',
        description: 'Développement rapide d’API, micro-services et connecteurs sur mesure pour étendre votre système.',
        icon: Workflow,
    },
] as const;

export const differentiators = [
    {
        title: 'Code-first, coûts maîtrisés',
        description: 'Priorité aux workflows codés et optimisés pour limiter l’usage d’API coûteuses.',
        icon: CircuitBoard,
    },
    {
        title: 'Mise en production rapide',
        description: 'Sprints de 10 jours pour livrer un prototype fonctionnel, prêt à être branché à vos flux.',
        icon: Rocket,
    },
    {
        title: 'Monitored by design',
        description: 'Logs consolidés, redondance et garde-fous humains intégrés dans chaque automatisation.',
        icon: ShieldCheck,
    },
] as const;

export const processSteps = [
    {
        title: 'Immersion & cartographie',
        description: 'Atelier avec vos équipes, analyse des frictions et design des flux cibles.',
        icon: Sparkles,
    },
    {
        title: 'Prototype augmenté',
        description: 'Montage du MVP + scénarios conversationnels réalistes, entraînement avec vos données.',
        icon: Bot,
    },
    {
        title: 'Industrialisation',
        description: 'Automatisation des QA, connecteurs sécurisés, déploiement monitoré et transfert de compétences.',
        icon: Radar,
    },
] as const;

export const caseStudies = caseStudyData as CaseStudy[];

export const showcases = caseStudies.map(({ title, description, metric, stack, industry, slug }) => ({
    slug,
    title,
    description,
    metric,
    stack,
    industry,
}));

export const accelerators = [
    {
        title: 'Bibliothèque de prompts Camerhub',
        description: 'Prompts testés en production pour les domaines vente, support, logistique et finance.',
    },
    {
        title: 'Connecteurs n8n prêts à l’emploi',
        description: 'Modules WhatsApp Cloud, Notion, Zoho, Google Workspace, Airtable et outils maison.',
    },
    {
        title: 'Pack qualité & conformité',
        description: 'Jeux de tests automatisés, filtres de sécurité et fallback humain intégrés.',
    },
] as const;

export const operationsPerks = [
    {
        icon: Clock3,
        title: 'Revues hebdomadaires',
        description: 'Suivi hebdomadaire avec revues d’outputs et nouvelles opportunités d’automatisation.',
    },
    {
        icon: MessageSquareText,
        title: 'Communication synchrone',
        description: 'Canaux de communication en direct (WhatsApp, Slack) pour itérer rapidement.',
    },
    {
        icon: AlarmClockOff,
        title: 'Support prioritaire',
        description: 'Temps de résolution garanti pour les incidents critiques > 2h.',
    },
] as const;

export const servicePackages = [
    {
        title: 'Kick-off accéléré',
        tagline: 'Alignement + prototype en 10 jours',
        timeline: '10 jours',
        deliverables: [
            'Atelier de cadrage & audit flux existants',
            'Prototype fonctionnel (n8n + agent IA)',
            'Backlog priorisé & plan de déploiement',
        ],
    },
    {
        title: 'Opérations augmentées',
        tagline: 'Automatisations en production + monitoring',
        timeline: '4 à 6 semaines',
        deliverables: [
            'Industrialisation d’un flux critique',
            'Dashboards métiers & alertes temps réel',
            'Formation équipe + playbook de suivi',
        ],
    },
    {
        title: 'Run & optimisation continue',
        tagline: 'Scalabilité multi-flux + support 24/7',
        timeline: 'Contrat 3 mois',
        deliverables: [
            'Roadmap d’évolution multi-flux',
            'Optimisation coût API & supervision QA',
            'Support prioritaire + boucle d’amélioration',
        ],
    },
] as const;

export const integrationStack = [
    {
        category: 'Automatisation & orchestrateurs',
        items: ['n8n', 'Make', 'Temporal', 'Node/TypeScript'],
    },
    {
        category: 'IA générative & NLP',
        items: ['OpenAI', 'Anthropic', 'Vertex AI', 'LLM maison'],
    },
    {
        category: 'Data & Monitoring',
        items: ['Supabase', 'DuckDB', 'Metabase', 'Langfuse', 'Prometheus'],
    },
    {
        category: 'Acquisition & CRM',
        items: ['WhatsApp Cloud', 'HubSpot', 'Zoho', 'Airtable', 'Notion'],
    },
] as const;

export const serviceFaq = [
    {
        question: 'Combien de temps pour livrer un premier résultat ? ',
        answer:
            'Le sprint Kick-off livre un prototype opérationnel en 10 jours ouvrés. On priorise un flux à fort ROI et on livre un agent ou workflow prêt à être branché.',
    },
    {
        question: 'Comment se déroule le quotidien avec Camerhub ?',
        answer:
            'Chaque projet inclut un canal dédié (WhatsApp/Slack), des points hebdomadaires, un dashboard partagé et une supervision automatisée pour anticiper les incidents.',
    },
    {
        question: 'Travaillez-vous avec des stacks déjà en place ?',
        answer:
            'Oui. On réutilise vos outils existants (CRM, ERP, bases internes). On ne facture pas d’abonnement propriétaire, on assemble les meilleures briques ouvertes et votre code.',
    },
] as const;

export const contactChannels = [
    {
        href: 'mailto:paul@camerhub.com',
        label: 'paul@camerhub.com',
        icon: MessageSquareText,
    },
    {
        href: 'https://wa.me/237691754257',
        label: 'WhatsApp direct',
        icon: Bot,
    },
] as const;

export const contactBadges: ContactBadge[] = [
    {
        label: 'Diagnostic express',
        value: '48h',
        tone: 'focus',
    },
    {
        label: 'Kick-off projet',
        value: '7 jours',
    },
    {
        label: 'Support prioritaire',
        value: 'Heat 24/7',
    },
];


export const commerceIdeaSegments = [
    {
        segment: 'Petits commerces',
        ideas: [
            {
                title: 'Click & Collect WhatsApp',
                description: 'Tunnel de commande instantané, paiement et retrait en boutique via chatbot WhatsApp.',
                impact: '+25% de ventes additionnelles sur les horaires creux',
            },
            {
                title: 'Campagnes locales automatisées',
                description: 'Diffusion automatique des promos, stocks flash et relances SMS/WhatsApp selon la météo et les ventes.',
                impact: 'Visites en boutique x1.5 pendant les périodes clés',
            },
            {
                title: 'Fidélisation intelligente',
                description: 'Programme de points et rappels personnalisés connecté au POS et aux habitudes d’achat.',
                impact: '+30% de réachats dans les 60 jours',
            },
        ],
    },
    {
        segment: 'Grandes enseignes & marketplaces',
        ideas: [
            {
                title: 'Copilote merchandising',
                description: 'Recommandations IA pour adapter l’assortiment par magasin et pousser des bundles dynamiques.',
                impact: '+18% de panier moyen sur les lignes impactées',
            },
            {
                title: 'Service client social media',
                description: 'Automatisation du tri, priorisation et réponse des messages Meta/Instagram/X.',
                impact: 'Backlog social divisé par 3 et SLA maintenu',
            },
            {
                title: 'Pilotage growth omnicanal',
                description: 'Analyse cross-canal, budget pacing et génération de créas IA orchestrées depuis n8n.',
                impact: '+35% de ROI marketing en 8 semaines',
            },
        ],
    },
] as const;

export const revealDelays = ['reveal-delay-200', 'reveal-delay-400', 'reveal-delay-600'] as const;

export const checklistIcon = Check;
