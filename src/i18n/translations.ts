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
  es: {
    meta: {
      title: 'Connectea — Compartir archivos cifrados sin cuenta | Servidor Minecraft | Windows',
      description: 'Comparte archivos cifrados sin registrarte. Crea una sala, comparte el código y suelta archivos en segundos. Plugin de Minecraft integrado. Gratis para Windows 10/11.',
      keywords: 'compartir archivos sin cuenta, compartir archivos gratis, compartir archivos cifrados, compartir archivos con amigos, plugin servidor minecraft, crear servidor minecraft fácil, servidor minecraft un clic, transferencia archivos instantánea, compartir archivos Windows',
    },
    nav: {
      features: 'Funciones',
      security: 'Seguridad',
      plugins: 'Plugins',
      pricing: 'Precios',
      download: 'Descargar Gratis',
    },
    hero: {
      badge: 'Disponible para Windows 10 / 11',
      headline: 'Comparte archivos con amigos. Sin cuenta, sin complicaciones.',
      subheadline: 'Crea una sala, comparte el código y suelta los archivos. Listo en segundos. Solo escribe tu nombre — sin email ni contraseña. Cifrado de extremo a extremo. Levanta un servidor de Minecraft en un clic.',
      cta_primary: 'Descargar Gratis',
      cta_secondary: 'Servidor de Minecraft',
      stats: [
        { value: '1 Clic', label: 'Servidor Minecraft' },
        { value: '50 GB', label: 'Por sala' },
        { value: '5 GB', label: 'Por archivo' },
      ],
    },
    features: {
      title: 'Todo lo que necesitas para compartir archivos, nada más',
      subtitle: 'Connectea te da justo lo necesario para compartir archivos — sin complicaciones. Los plugins añaden potencia a tu ritmo, no al nuestro.',
      items: [
        {
          icon: '🔒',
          title: 'Cifrado de extremo a extremo opcional',
          desc: 'Escribe una contraseña y el archivo se cifra en fragmentos de 10 MB con AES-256-GCM antes de salir de tu equipo. La integridad se verifica con SHA-256 al descargar. Connectea no puede descifrarlo.',
        },
        {
          icon: '⚡',
          title: 'Salas por código — sin registrarse',
          desc: 'Solo necesitas un nombre. Crea una sala, copia el código o enlace y compártelo con quien quieras.',
        },
        {
          icon: '📁',
          title: 'Carpetas, arrastrar y soltar, y ZIP',
          desc: 'Suelta archivos o árboles enteros de carpetas — los directorios anidados se conservan tal cual.',
        },
        {
          icon: '🛡️',
          title: 'Control de acceso a la sala',
          desc: 'Como propietario, restringe la sala a una lista curada y define si cada usuario puede leer, escribir o ambas. Si revocas el acceso, el cambio se aplica en segundos.',
        },
        {
          icon: '🔌',
          title: 'Plugins para funciones extra',
          desc: 'Añade plugins a cualquier sala para ampliar su funcionalidad — por ejemplo, el plugin de Minecraft levanta un servidor en segundos y sincroniza los archivos del mundo con la sala. Gestiona todo desde la app.',
        },
        {
          icon: '⚙️',
          title: 'Salas persistentes',
          desc: 'Mantén la sala activa aunque te desconectes, con todos tus archivos y plugins intactos, por un precio mensual asequible. Ideal para servidores de Minecraft o proyectos colaborativos.',
        },
      ],
    },
    howItWorks: {
      title: 'Instala Connectea y comparte tu primer archivo en menos de un minuto',
      subtitle: 'Sin cuenta, sin email de confirmación, sin asistente de configuración. Escribe tu nombre y ya estás dentro.',
      steps: [
        {
          number: '01',
          title: 'Abre la app y escribe tu nombre',
          desc: 'No hay contraseña ni email. El nombre que escribes te identifica mientras estés conectado.',
        },
        {
          number: '02',
          title: 'Crea una sala o únete con un código',
          desc: 'Cada sala tiene un código corto. Crea una nueva y copia el código, o pega el que te han enviado.',
        },
        {
          number: '03',
          title: 'Suelta archivos — cifra si quieres',
          desc: 'Suelta archivos o carpetas. Añade una contraseña de cifrado si el contenido es sensible — quien descargue necesitará la misma contraseña para descifrarlo.',
        },
      ],
    },
    security: {
      badge: 'Seguridad',
      title: 'Cifrado de extremo a extremo',
      subtitle: 'Cuando pones contraseña, Connectea no la recibe. El cifrado ocurre en tu dispositivo; el servidor solo ve texto cifrado.',
      points: [
        'AES-256-GCM con un IV de 12 bytes nuevo por cada fragmento de 10 MB',
        'Derivación de clave PBKDF2-SHA-256, 100 000 iteraciones',
        'La contraseña y la clave nunca salen de tu dispositivo a no ser que las compartas',
        'El hash SHA-256 del contenido en claro se verifica tras descargar',
        'Los cambios de permisos revocan el acceso en tiempo real',
        'Sin base de datos de usuarios — la identidad es solo un token de sesión ligado al nombre',
      ],
    },
    plugins: {
      badge: 'Nuestro plugin de servidor de Minecraft',
      title: 'Servidor de Minecraft en un clic',
      subtitle: 'Añade el plugin de Minecraft a una sala, pulsa Iniciar — el servidor arranca y los archivos del mundo se sincronizan automáticamente. Gestiona todo desde la app. Más plugins en camino.',
      cta: 'Inicia ya tu servidor de Minecraft',
      features: [
        'Servidor de Minecraft en un clic: añade el plugin, espera a que arranque y empieza a jugar',
        'Los archivos del mundo y configuraciones viven en la sala — siempre sincronizados',
        'Modifica los archivos del servidor a tu gusto',
        'Inicia, detén y elimina plugins cuando quieras',
      ],
    },
    pricing: {
      title: 'Gratis para salas temporales. Solo pagas si necesitas que duren.',
      subtitle: 'La mayoría no necesitará pagar. El plan gratuito ya incluye cifrado, lista de acceso, plugins y los 50 GB completos por sala.',
      free: {
        title: 'Gratis',
        price: '0 €',
        period: 'Para siempre',
        cta: 'Descargar Gratis',
        features: [
          'Salas temporales (se cierran al irse el propietario)',
          'Hasta 5 GB por archivo, 50 GB por sala',
          'Cifrado de extremo a extremo AES-256-GCM',
          'Control de acceso a la sala',
          'Plugins (Beta)',
        ],
      },
      pro: {
        title: 'Sala Permanente',
        badge: 'Suscripción',
        price: '5 €',
        period: 'sala / mes',
        cta: 'Hacer Permanente',
        features: [
          'Todo lo del plan gratuito',
          'La sala sigue activa aunque te desconectes',
          'Contraseña de propiedad — puedes reclamar la sala cuando vuelvas',
          'Perfecto para salas con plugin (servidores de Minecraft, proyectos colaborativos, etc.)',
          'Cancelable desde la app cuando quieras',
        ],
      },
    },
    download: {
      title: 'Descárgalo gratis. Comparte tu primer archivo en menos de un minuto.',
      subtitle: 'Gratis para Windows. Sin email, sin contraseñas, sin complicaciones.',
      cta: 'Descargar para Windows',
      note: 'Windows 10 / 11 · Gratis · Sin cuenta · Doble clic en el instalador y listo',
    },
    footer: {
      tagline: 'Comparte archivos cifrados en salas. Sin otra cuenta que crear.',
      product: 'Producto',
      legal: 'Contacto',
      links: {
        features: 'Funciones',
        security: 'Seguridad',
        pricing: 'Precios',
        download: 'Descargar',
        privacy: 'Reportar un bug',
        terms: 'Contacto general',
        contact: 'Escríbenos',
      },
      copyright: '© 2026 Connectea. Todos los derechos reservados.',
    },
  },

  en: {
    meta: {
      title: 'Connectea — Encrypted File Sharing Without an Account | Minecraft Server | Free for Windows',
      description: 'Share encrypted files without signing up. Create a room, share the code, drop your files — done in seconds. Built-in Minecraft server plugin. Free for Windows 10 / 11.',
      keywords: 'share files without account, free file sharing, encrypted file sharing, share files with friends, minecraft server plugin, one-click minecraft server, instant file transfer, no signup file sharing, share files Windows',
    },
    nav: {
      features: 'Features',
      security: 'Security',
      plugins: 'Plugins',
      pricing: 'Pricing',
      download: 'Download Free',
    },
    hero: {
      badge: 'Available for Windows 10 / 11',
      headline: 'Share files with friends. No account, no friction.',
      subheadline: 'Create a room, share the code, and drop your files. Done in seconds. Just a name — no email, no password. End-to-end encrypted. Spin up a Minecraft server in one click.',
      cta_primary: 'Download Free',
      cta_secondary: 'Minecraft Server',
      stats: [
        { value: '1 Click', label: 'Minecraft Server' },
        { value: '50 GB', label: 'Per room' },
        { value: '5 GB', label: 'Per file' },
      ],
    },
    features: {
      title: 'Everything you need to share files — nothing you don\'t',
      subtitle: 'Connectea gives you exactly what you need to share files — simple and nothing more. Plugins let you add power on your terms, not ours.',
      items: [
        {
          icon: '🔒',
          title: 'Optional end-to-end encryption',
          desc: 'Set a password and your file is encrypted in 10 MB chunks with AES-256-GCM before it ever leaves your machine. Integrity verified with SHA-256 on download. Connectea can\'t decrypt it.',
        },
        {
          icon: '⚡',
          title: 'Code-based rooms — no sign-up',
          desc: 'All you need is a name. Create a room, copy the code or link, and share it with whoever you want.',
        },
        {
          icon: '📁',
          title: 'Folders, drag-and-drop, and ZIP',
          desc: 'Drop files or entire folder trees — nested directories are preserved exactly as-is.',
        },
        {
          icon: '🛡️',
          title: 'Room access control',
          desc: 'As owner, lock the room to a curated list and choose whether each user can read, write, or both. Revoke access and the change propagates in seconds.',
        },
        {
          icon: '🔌',
          title: 'Plugins for extra functionality',
          desc: 'Add plugins to any room for extra features — the Minecraft plugin spins up a server in seconds and keeps world files in sync with the room. Manage everything from the app.',
        },
        {
          icon: '⚙️',
          title: 'Persistent rooms',
          desc: 'Keep your room alive even when you disconnect — files and plugins intact — for a low monthly price. Perfect for Minecraft servers or collaborative projects.',
        },
      ],
    },
    howItWorks: {
      title: 'Install Connectea and share your first file in under a minute',
      subtitle: 'No account, no confirmation email, no setup wizard. Type a name and you\'re in.',
      steps: [
        {
          number: '01',
          title: 'Open the app and enter your name',
          desc: 'No password, no email. The name you type is how others see you while you\'re connected.',
        },
        {
          number: '02',
          title: 'Create a room or join one with a code',
          desc: 'Every room has a short code. Create a new one and copy the code, or paste the one someone sent you.',
        },
        {
          number: '03',
          title: 'Drop files — encrypt if you want',
          desc: 'Drop files or folders. Add an encryption password if the content is sensitive — anyone downloading will need the same password to decrypt.',
        },
      ],
    },
    security: {
      badge: 'Security',
      title: 'End-to-End Encryption',
      subtitle: 'When you set a password, Connectea never sees it. Encryption happens on your device — the server only ever sees ciphertext.',
      points: [
        'AES-256-GCM with a fresh 12-byte IV per 10 MB chunk',
        'PBKDF2-SHA-256 key derivation, 100,000 iterations',
        'Password and key never leave your device unless you share them',
        'SHA-256 hash of plaintext content verified after download',
        'Permission changes revoke access in real time',
        'No account database — identity is just a session token tied to a name',
      ],
    },
    plugins: {
      badge: 'Our Minecraft server plugin',
      title: 'One-Click Minecraft Server',
      subtitle: 'Add the Minecraft plugin to a room, hit Start — the server boots and world files sync automatically. Manage everything from the app. More plugins on the way.',
      cta: 'Start your Minecraft server now',
      features: [
        'One-click Minecraft server: add the plugin, wait for it to boot, and play',
        'World files and config live in the room — always in sync',
        'Edit server files however you like',
        'Start, stop, and remove plugins whenever you want',
      ],
    },
    pricing: {
      title: 'Free for temporary rooms. Only pay if you need them to last.',
      subtitle: 'Most people won\'t need to pay. The free plan already includes encryption, allowlist, plugins, and the full 50 GB per room.',
      free: {
        title: 'Free',
        price: '€0',
        period: 'Forever',
        cta: 'Download Free',
        features: [
          'Temporary rooms (close when the owner leaves)',
          'Up to 5 GB per file, 50 GB per room',
          'AES-256-GCM end-to-end encryption',
          'Room access control',
          'Plugins (Beta)',
        ],
      },
      pro: {
        title: 'Permanent Room',
        badge: 'Subscription',
        price: '€5',
        period: 'room / month',
        cta: 'Make it Permanent',
        features: [
          'Everything in the free plan',
          'Room stays alive when you disconnect',
          'Ownership password — come back and reclaim ownership anytime',
          'Great for plugin rooms (Minecraft servers, collaborative projects, etc.)',
          'Cancel from the app whenever you want',
        ],
      },
    },
    download: {
      title: 'Try it free. Share your first file in under a minute.',
      subtitle: 'Free for Windows. No email, no passwords, no hassle.',
      cta: 'Download for Windows',
      note: 'Windows 10 / 11 · Free · No account · Double-click the installer and you\'re done',
    },
    footer: {
      tagline: 'Encrypted file sharing in rooms. For people who don\'t want another account.',
      product: 'Product',
      legal: 'Contact',
      links: {
        features: 'Features',
        security: 'Security',
        pricing: 'Pricing',
        download: 'Download',
        privacy: 'Report a bug',
        terms: 'General contact',
        contact: 'Write to us',
      },
      copyright: '© 2026 Connectea. All rights reserved.',
    },
  },

  zh: {
    meta: {
      title: 'Connectea — 无需注册即可加密分享文件 | Minecraft 服务器 | Windows 免费',
      description: '无需账号即可加密分享文件。创建房间，分享代码，拖入文件 — 几秒搞定。内置 Minecraft 服务器插件，一键启动。免费支持 Windows 10/11。',
      keywords: '无账号文件分享, 免费文件分享, 加密文件传输, 与朋友分享文件, Minecraft服务器插件, 一键Minecraft服务器, 即时文件传输, Windows文件分享, 无需注册文件分享',
    },
    nav: {
      features: '功能',
      security: '安全',
      plugins: '插件',
      pricing: '定价',
      download: '免费下载',
    },
    hero: {
      badge: '支持 Windows 10 / 11',
      headline: '与朋友分享文件，无需账号，零门槛',
      subheadline: '创建房间，分享代码，拖入文件，完成。几秒搞定。只需一个名字 — 无需邮箱和密码。端到端加密。一键启动 Minecraft 服务器。',
      cta_primary: '免费下载',
      cta_secondary: 'Minecraft 服务器',
      stats: [
        { value: '1 键', label: 'Minecraft 服务器' },
        { value: '50 GB', label: '每个房间' },
        { value: '5 GB', label: '每个文件' },
      ],
    },
    features: {
      title: '文件分享所需的一切，没有多余',
      subtitle: 'Connectea 只给你分享文件所需的功能 — 简洁，不冗余。插件让你按自己的节奏扩展功能，而不是被强迫接受我们的方式。',
      items: [
        {
          icon: '🔒',
          title: '可选端到端加密',
          desc: '设置密码后，文件在离开你的设备前就被分成 10 MB 的片段，用 AES-256-GCM 加密。下载时用 SHA-256 验证完整性。Connectea 无法解密。',
        },
        {
          icon: '⚡',
          title: '代码房间 — 无需注册',
          desc: '只需一个名字。创建房间，复制代码或链接，发给你想邀请的人即可。',
        },
        {
          icon: '📁',
          title: '文件夹、拖拽上传和 ZIP',
          desc: '拖入文件或整个文件夹树 — 嵌套目录完整保留，一个不差。',
        },
        {
          icon: '🛡️',
          title: '房间访问控制',
          desc: '作为房主，你可以将房间限制给特定用户，并为每人设置读写权限。撤销权限后几秒内立即生效。',
        },
        {
          icon: '🔌',
          title: '插件扩展功能',
          desc: '为任何房间添加插件以获得额外功能 — Minecraft 插件可以几秒内启动服务器，并自动将存档文件同步到房间。一切都在 app 内管理。更多插件即将上线。',
        },
        {
          icon: '⚙️',
          title: '持久房间',
          desc: '即使断线，房间也继续存在 — 文件和插件完好无损 — 每月只需少量费用。适合 Minecraft 服务器或长期协作项目。',
        },
      ],
    },
    howItWorks: {
      title: '安装 Connectea，一分钟内分享第一个文件',
      subtitle: '无账号，无确认邮件，无设置向导。输入名字，直接开始。',
      steps: [
        {
          number: '01',
          title: '打开 app，输入你的名字',
          desc: '没有密码，没有邮箱。你输入的名字就是其他人在线看到你的标识。',
        },
        {
          number: '02',
          title: '创建房间或用代码加入',
          desc: '每个房间都有一个短代码。新建房间并复制代码，或粘贴别人发给你的代码。',
        },
        {
          number: '03',
          title: '拖入文件 — 按需加密',
          desc: '拖入文件或文件夹。如果内容敏感，设置加密密码 — 下载者需要相同密码才能解密。',
        },
      ],
    },
    security: {
      badge: '安全',
      title: '端到端加密',
      subtitle: '设置密码时，Connectea 永远看不到它。加密发生在你的设备上 — 服务器只能看到密文。',
      points: [
        'AES-256-GCM 加密，每个 10 MB 分块使用全新的 12 字节 IV',
        'PBKDF2-SHA-256 密钥派生，100,000 次迭代',
        '密码和密钥永远不会离开你的设备，除非你主动分享',
        '下载后在本地验证明文内容的 SHA-256 哈希',
        '权限变更实时撤销访问',
        '无账号数据库 — 身份只是一个与名字绑定的会话令牌',
      ],
    },
    plugins: {
      badge: '我们的 Minecraft 服务器插件',
      title: '一键启动 Minecraft 服务器',
      subtitle: '为房间添加 Minecraft 插件，点击启动 — 服务器自动运行，存档文件自动同步。一切在 app 内管理。更多插件即将推出。',
      cta: '立即启动你的 Minecraft 服务器',
      features: [
        '一键 Minecraft 服务器：添加插件，等待启动，开始游玩',
        '存档和配置文件保存在房间里 — 始终同步',
        '随意修改服务器文件',
        '随时启动、停止和移除插件',
      ],
    },
    pricing: {
      title: '临时房间完全免费。只有需要长期保留时才付费。',
      subtitle: '大多数人无需付费。免费版已包含加密、访问白名单、插件以及每个房间完整的 50 GB 空间。',
      free: {
        title: '免费',
        price: '€0',
        period: '永久免费',
        cta: '免费下载',
        features: [
          '临时房间（房主离开即关闭）',
          '单文件最大 5 GB，每个房间最大 50 GB',
          'AES-256-GCM 端到端加密',
          '房间访问控制',
          '插件（测试版）',
        ],
      },
      pro: {
        title: '永久房间',
        badge: '订阅',
        price: '€5',
        period: '房间 / 月',
        cta: '设为永久',
        features: [
          '包含免费版全部功能',
          '断线后房间仍然保持开放',
          '所有权密码 — 随时回来重新认领房间',
          '适合插件房间（Minecraft 服务器、协作项目等）',
          '随时可在 app 内取消订阅',
        ],
      },
    },
    download: {
      title: '免费试用，几秒内开始分享文件。',
      subtitle: 'Windows 免费使用。无需邮箱、无需密码、无繁琐步骤。',
      cta: '下载 Windows 版',
      note: 'Windows 10 / 11 · 免费 · 无需账号 · 双击安装包即可完成',
    },
    footer: {
      tagline: '在房间里加密分享文件。为不想再注册账号的人而生。',
      product: '产品',
      legal: '联系我们',
      links: {
        features: '功能',
        security: '安全',
        pricing: '定价',
        download: '下载',
        privacy: '报告问题',
        terms: '一般联系',
        contact: '联系我们',
      },
      copyright: '© 2026 Connectea. 保留所有权利。',
    },
  },
};
