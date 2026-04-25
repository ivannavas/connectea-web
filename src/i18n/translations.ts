export type Lang = 'en' | 'es' | 'zh';

export interface Translation {
  meta: { title: string; description: string; keywords: string };
  nav: { features: string; security: string; plugins: string; pricing: string; download: string };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta_primary: string;
    cta_secondary: string;
    stats: Array<{ value: string; label: string }>;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{ icon: string; title: string; desc: string }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{ number: string; title: string; desc: string }>;
  };
  security: {
    badge: string;
    title: string;
    subtitle: string;
    points: string[];
  };
  plugins: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    features: string[];
  };
  pricing: {
    title: string;
    subtitle: string;
    free: { title: string; price: string; period: string; cta: string; features: string[] };
    pro: { title: string; badge: string; price: string; period: string; cta: string; features: string[] };
  };
  download: { title: string; subtitle: string; cta: string; note: string };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    links: { features: string; security: string; pricing: string; download: string; privacy: string; terms: string; contact: string };
    copyright: string;
  };
}

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'Connectea — Secure Real-Time File Sharing & Collaboration',
      description: 'Share files securely with end-to-end AES-256-GCM encryption. Create instant rooms, manage granular access, and collaborate in real-time. Free for Windows.',
      keywords: 'secure file sharing, encrypted collaboration, real-time rooms, AES-256, end-to-end encryption, team collaboration, file transfer',
    },
    nav: {
      features: 'Features',
      security: 'Security',
      plugins: 'Plugins',
      pricing: 'Pricing',
      download: 'Download Free',
    },
    hero: {
      badge: 'Now Available for Windows',
      headline: 'Secure File Sharing for Modern Teams',
      subheadline: 'Create encrypted rooms, share files instantly, and collaborate in real-time — with zero-knowledge end-to-end encryption that keeps your data truly private.',
      cta_primary: 'Download Free',
      cta_secondary: 'See Features',
      stats: [
        { value: 'AES-256-GCM', label: 'Encryption standard' },
        { value: '50 GB', label: 'Per room capacity' },
        { value: 'Zero', label: 'Knowledge server' },
      ],
    },
    features: {
      title: 'Everything you need for secure collaboration',
      subtitle: 'Privacy built in from the ground up — no compromises, no surveillance.',
      items: [
        {
          icon: '🔒',
          title: 'End-to-End Encryption',
          desc: 'Files encrypted client-side with AES-256-GCM. Passwords and keys never leave your device. Connectea cannot read your files.',
        },
        {
          icon: '⚡',
          title: 'Instant Rooms',
          desc: 'Create or join rooms in seconds with auto-generated codes. Ephemeral rooms for quick shares, or permanent rooms for your team.',
        },
        {
          icon: '📁',
          title: 'Full Folder Support',
          desc: 'Drag and drop entire folder structures with nested directories. Maintain hierarchy. Download everything as a ZIP archive.',
        },
        {
          icon: '🛡️',
          title: 'Granular Access Control',
          desc: 'Allowlist-based permissions. Set read or write access per user. Remove access instantly. You stay in control.',
        },
        {
          icon: '🔌',
          title: 'Plugin Ecosystem',
          desc: 'Extend Connectea with plugins for automation and custom workflows. Real-time streaming output in every room. (Beta)',
        },
        {
          icon: '🌐',
          title: 'Multi-Language',
          desc: 'Available in English, Spanish, and Chinese. Switch languages instantly. Your team, your language.',
        },
      ],
    },
    howItWorks: {
      title: 'Up and running in 30 seconds',
      subtitle: 'No account required for guests. No complex setup. Just share and collaborate.',
      steps: [
        {
          number: '01',
          title: 'Create a Room',
          desc: 'Open Connectea and create a new room. Get a unique room code instantly. Choose ephemeral or permanent.',
        },
        {
          number: '02',
          title: 'Share the Code',
          desc: 'Copy the room code and send it to your team. They join with the same code — no registration needed.',
        },
        {
          number: '03',
          title: 'Share Securely',
          desc: 'Upload files with optional password encryption. Recipients download with the password — Connectea never sees the content.',
        },
      ],
    },
    security: {
      badge: 'Zero-Knowledge Architecture',
      title: 'Your files are private. Always.',
      subtitle: 'Connectea is built on the principle that your data belongs to you. Encryption happens on your device, before anything touches our servers.',
      points: [
        'AES-256-GCM encryption per file chunk',
        'PBKDF2 key derivation (100,000 iterations, SHA-256)',
        'Passwords never transmitted to servers',
        'Client-side SHA-256 integrity verification after download',
        'Auto-logout on unauthorized permission changes',
        'Room codes for simple, secure access sharing',
      ],
    },
    plugins: {
      badge: 'Beta',
      title: 'Extend with Plugins',
      subtitle: 'The Connectea Plugin System lets you automate workflows, process files, and build custom integrations — all running in your rooms with real-time streaming output.',
      cta: 'Explore Plugins',
      features: [
        'Browse and add plugins to any room',
        'Execute actions with real-time streaming output',
        'Start, stop, and remove plugins on demand',
        'Plugin-managed folders with controlled access',
      ],
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'Start free. Upgrade for always-on permanent rooms.',
      free: {
        title: 'Free',
        price: '$0',
        period: 'Forever',
        cta: 'Download Free',
        features: [
          'Ephemeral rooms',
          'Up to 5 GB per file',
          '50 GB per room',
          'End-to-end encryption',
          'Access control & permissions',
          'Plugin ecosystem (Beta)',
          'Multi-language support',
        ],
      },
      pro: {
        title: 'Permanent',
        badge: 'Always On',
        price: 'Subscription',
        period: 'Monthly',
        cta: 'Get Started',
        features: [
          'Everything in Free',
          'Permanent rooms that stay open',
          'Room persists when owner disconnects',
          'Ownership claiming & transfer',
          'Priority support',
        ],
      },
    },
    download: {
      title: 'Ready to share securely?',
      subtitle: 'Download Connectea for Windows. Free to use, no account required.',
      cta: 'Download for Windows',
      note: 'Windows 10/11 · Free · No account required',
    },
    footer: {
      tagline: 'Secure, real-time file sharing for modern teams.',
      product: 'Product',
      legal: 'Legal',
      links: {
        features: 'Features',
        security: 'Security',
        pricing: 'Pricing',
        download: 'Download',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
      },
      copyright: '© 2025 Connectea. All rights reserved.',
    },
  },

  es: {
    meta: {
      title: 'Connectea — Compartir Archivos Seguro en Tiempo Real',
      description: 'Comparte archivos con cifrado AES-256-GCM de extremo a extremo. Crea salas al instante, gestiona permisos y colabora en tiempo real. Gratis para Windows.',
      keywords: 'compartir archivos seguro, colaboración cifrada, salas en tiempo real, AES-256, cifrado extremo a extremo, colaboración en equipo',
    },
    nav: {
      features: 'Funciones',
      security: 'Seguridad',
      plugins: 'Plugins',
      pricing: 'Precios',
      download: 'Descargar Gratis',
    },
    hero: {
      badge: 'Disponible para Windows',
      headline: 'Compartir Archivos Seguro para Equipos Modernos',
      subheadline: 'Crea salas cifradas, comparte archivos al instante y colabora en tiempo real — con cifrado de extremo a extremo de conocimiento cero que mantiene tus datos verdaderamente privados.',
      cta_primary: 'Descargar Gratis',
      cta_secondary: 'Ver Funciones',
      stats: [
        { value: 'AES-256-GCM', label: 'Estándar de cifrado' },
        { value: '50 GB', label: 'Capacidad por sala' },
        { value: 'Cero', label: 'Conocimiento del servidor' },
      ],
    },
    features: {
      title: 'Todo lo que necesitas para colaborar con seguridad',
      subtitle: 'Privacidad integrada desde cero — sin compromisos, sin vigilancia.',
      items: [
        {
          icon: '🔒',
          title: 'Cifrado de Extremo a Extremo',
          desc: 'Archivos cifrados en el cliente con AES-256-GCM. Las contraseñas nunca salen de tu dispositivo. Connectea no puede leer tus archivos.',
        },
        {
          icon: '⚡',
          title: 'Salas Instantáneas',
          desc: 'Crea o únete a salas en segundos con códigos generados automáticamente. Salas efímeras para compartidas puntuales, o permanentes para tu equipo.',
        },
        {
          icon: '📁',
          title: 'Soporte Completo de Carpetas',
          desc: 'Arrastra y suelta estructuras de carpetas completas con directorios anidados. Descarga todo como archivo ZIP con un clic.',
        },
        {
          icon: '🛡️',
          title: 'Control de Acceso Granular',
          desc: 'Permisos basados en lista de permitidos. Configura acceso de lectura o escritura por usuario. Revoca el acceso al instante.',
        },
        {
          icon: '🔌',
          title: 'Ecosistema de Plugins',
          desc: 'Extiende Connectea con plugins para automatización y flujos de trabajo personalizados. Salida en tiempo real en cada sala. (Beta)',
        },
        {
          icon: '🌐',
          title: 'Multiidioma',
          desc: 'Disponible en inglés, español y chino. Cambia de idioma al instante. Tu equipo, tu idioma.',
        },
      ],
    },
    howItWorks: {
      title: 'En marcha en 30 segundos',
      subtitle: 'Sin cuenta para invitados. Sin configuración compleja. Solo comparte y colabora.',
      steps: [
        {
          number: '01',
          title: 'Crea una Sala',
          desc: 'Abre Connectea y crea una nueva sala. Obtén un código único al instante. Elige efímera o permanente.',
        },
        {
          number: '02',
          title: 'Comparte el Código',
          desc: 'Copia el código de sala y envíalo a tu equipo. Se unen con el mismo código — sin registro necesario.',
        },
        {
          number: '03',
          title: 'Comparte con Seguridad',
          desc: 'Sube archivos con cifrado opcional por contraseña. Los destinatarios descargan con la contraseña — Connectea nunca ve el contenido.',
        },
      ],
    },
    security: {
      badge: 'Arquitectura de Conocimiento Cero',
      title: 'Tus archivos son privados. Siempre.',
      subtitle: 'Connectea se basa en el principio de que tus datos te pertenecen. El cifrado ocurre en tu dispositivo, antes de que nada toque nuestros servidores.',
      points: [
        'Cifrado AES-256-GCM por fragmento de archivo',
        'Derivación de claves PBKDF2 (100.000 iteraciones, SHA-256)',
        'Contraseñas nunca transmitidas a servidores',
        'Verificación de integridad SHA-256 en el cliente tras la descarga',
        'Cierre de sesión automático ante cambios de permisos no autorizados',
        'Códigos de sala para compartir acceso de forma simple y segura',
      ],
    },
    plugins: {
      badge: 'Beta',
      title: 'Amplía con Plugins',
      subtitle: 'El Sistema de Plugins de Connectea te permite automatizar flujos de trabajo, procesar archivos y crear integraciones personalizadas — todo en tus salas con salida en tiempo real.',
      cta: 'Explorar Plugins',
      features: [
        'Explora y agrega plugins a cualquier sala',
        'Ejecuta acciones con salida en tiempo real',
        'Inicia, detén y elimina plugins según necesites',
        'Carpetas gestionadas por plugins con acceso controlado',
      ],
    },
    pricing: {
      title: 'Precios Sencillos',
      subtitle: 'Empieza gratis. Actualiza para salas siempre activas.',
      free: {
        title: 'Gratis',
        price: '$0',
        period: 'Para siempre',
        cta: 'Descargar Gratis',
        features: [
          'Salas efímeras',
          'Hasta 5 GB por archivo',
          '50 GB por sala',
          'Cifrado de extremo a extremo',
          'Control de acceso y permisos',
          'Ecosistema de plugins (Beta)',
          'Soporte multiidioma',
        ],
      },
      pro: {
        title: 'Permanente',
        badge: 'Siempre Activa',
        price: 'Suscripción',
        period: 'Mensual',
        cta: 'Comenzar',
        features: [
          'Todo lo incluido en Gratis',
          'Salas permanentes que permanecen abiertas',
          'La sala persiste cuando el propietario se desconecta',
          'Reclamación y transferencia de propiedad',
          'Soporte prioritario',
        ],
      },
    },
    download: {
      title: '¿Listo para compartir con seguridad?',
      subtitle: 'Descarga Connectea para Windows. Gratis, sin cuenta requerida.',
      cta: 'Descargar para Windows',
      note: 'Windows 10/11 · Gratis · Sin cuenta requerida',
    },
    footer: {
      tagline: 'Compartir archivos seguro en tiempo real para equipos modernos.',
      product: 'Producto',
      legal: 'Legal',
      links: {
        features: 'Funciones',
        security: 'Seguridad',
        pricing: 'Precios',
        download: 'Descargar',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        contact: 'Contacto',
      },
      copyright: '© 2025 Connectea. Todos los derechos reservados.',
    },
  },

  zh: {
    meta: {
      title: 'Connectea — 安全实时文件共享与协作',
      description: '使用端对端 AES-256-GCM 加密安全共享文件。即时创建房间，管理访问权限，实时协作。Windows 免费版。',
      keywords: '安全文件共享, 加密协作, 实时房间, AES-256, 端对端加密, 团队协作, 文件传输',
    },
    nav: {
      features: '功能',
      security: '安全',
      plugins: '插件',
      pricing: '价格',
      download: '免费下载',
    },
    hero: {
      badge: '现已支持 Windows',
      headline: '为现代团队打造的安全文件共享',
      subheadline: '创建加密房间，即时共享文件，实时协作 — 采用零知识端对端加密，让您的数据真正私密。',
      cta_primary: '免费下载',
      cta_secondary: '查看功能',
      stats: [
        { value: 'AES-256-GCM', label: '加密标准' },
        { value: '50 GB', label: '每房间容量' },
        { value: '零', label: '知识服务器' },
      ],
    },
    features: {
      title: '安全协作所需的一切',
      subtitle: '从底层构建的隐私保护 — 毫不妥协，零监控。',
      items: [
        {
          icon: '🔒',
          title: '端对端加密',
          desc: '使用 AES-256-GCM 在客户端加密文件。密码和密钥永不离开您的设备。Connectea 无法读取您的文件。',
        },
        {
          icon: '⚡',
          title: '即时房间',
          desc: '使用自动生成的代码在几秒内创建或加入房间。临时房间用于一次性分享，或为团队创建永久房间。',
        },
        {
          icon: '📁',
          title: '完整文件夹支持',
          desc: '拖放包含嵌套目录的整个文件夹结构。保持层级结构。一键将所有内容下载为 ZIP 压缩包。',
        },
        {
          icon: '🛡️',
          title: '精细访问控制',
          desc: '基于白名单的权限管理。为每个用户设置读取或写入权限。即时撤销访问权限。',
        },
        {
          icon: '🔌',
          title: '插件生态系统',
          desc: '使用插件扩展 Connectea，实现自动化工作流和自定义集成。每个房间实时流式输出。（Beta）',
        },
        {
          icon: '🌐',
          title: '多语言支持',
          desc: '支持英语、西班牙语和中文。即时切换语言。您的团队，您的语言。',
        },
      ],
    },
    howItWorks: {
      title: '30秒内启动运行',
      subtitle: '访客无需账户。无需复杂设置。直接共享协作。',
      steps: [
        {
          number: '01',
          title: '创建房间',
          desc: '打开 Connectea 并创建新房间。即时获取唯一房间代码。选择临时或永久房间。',
        },
        {
          number: '02',
          title: '分享代码',
          desc: '复制房间代码并发送给团队。他们用同一代码加入 — 无需注册。',
        },
        {
          number: '03',
          title: '安全共享',
          desc: '可选密码加密上传文件。接收者使用密码下载 — Connectea 永远看不到内容。',
        },
      ],
    },
    security: {
      badge: '零知识架构',
      title: '您的文件始终保持私密。',
      subtitle: 'Connectea 建立在您的数据属于您这一原则之上。加密在您的设备上进行，在任何内容接触我们的服务器之前完成。',
      points: [
        '每个文件块使用 AES-256-GCM 加密',
        'PBKDF2 密钥派生（100,000 次迭代，SHA-256）',
        '密码从不传输到服务器',
        '下载后客户端 SHA-256 完整性验证',
        '未授权权限更改时自动退出登录',
        '房间代码实现简单安全的访问共享',
      ],
    },
    plugins: {
      badge: 'Beta',
      title: '通过插件扩展功能',
      subtitle: 'Connectea 插件系统让您自动化工作流程、处理文件并构建自定义集成 — 所有这些都在您的房间中实时流式运行。',
      cta: '探索插件',
      features: [
        '浏览并向任何房间添加插件',
        '执行带实时流式输出的操作',
        '按需启动、停止和删除插件',
        '具有受控访问的插件管理文件夹',
      ],
    },
    pricing: {
      title: '简单定价',
      subtitle: '免费开始。升级获取全天候永久房间。',
      free: {
        title: '免费版',
        price: '¥0',
        period: '永久免费',
        cta: '免费下载',
        features: [
          '临时房间',
          '每文件最多 5 GB',
          '每房间 50 GB',
          '端对端加密',
          '访问控制和权限管理',
          '插件生态系统（Beta）',
          '多语言支持',
        ],
      },
      pro: {
        title: '永久版',
        badge: '全天候在线',
        price: '订阅制',
        period: '每月',
        cta: '立即开始',
        features: [
          '免费版全部功能',
          '保持开放的永久房间',
          '房主断线后房间持续存在',
          '所有权认领和转让',
          '优先技术支持',
        ],
      },
    },
    download: {
      title: '准备好安全共享了吗？',
      subtitle: '下载 Windows 版 Connectea。免费使用，无需账户。',
      cta: '下载 Windows 版本',
      note: 'Windows 10/11 · 免费 · 无需账户',
    },
    footer: {
      tagline: '为现代团队打造的安全实时文件共享。',
      product: '产品',
      legal: '法律',
      links: {
        features: '功能',
        security: '安全',
        pricing: '价格',
        download: '下载',
        privacy: '隐私政策',
        terms: '服务条款',
        contact: '联系我们',
      },
      copyright: '© 2025 Connectea. 保留所有权利。',
    },
  },
};
