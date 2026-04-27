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
      title: 'Connectea — Comparte archivos con amigos sin registrarte',
      description: 'Crea una sala, comparte el código, suelta archivos — listo en segundos. Sin cuenta ni email. Lanza un servidor de Minecraft en un clic con el plugin incluido. Gratis para Windows.',
      keywords: 'compartir archivos con amigos, compartir archivos sin cuenta, plugin servidor minecraft, crear servidor minecraft un clic, transferencia archivos instantánea, compartir archivos cifrados, Windows',
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
      headline: 'Comparte archivos. Sin cuenta, sin líos',
      subheadline: 'Crea una sala, comparte el código con tus amigos y suelta tus archivos. Listo en segundos. Sin email ni contraseña — solo un nombre. Cifrado extremo a extremo. Levanta un servidor de Minecraft de forma fácil, en segundos.',
      cta_primary: 'Descargar Gratis',
      cta_secondary: 'Servidor de Minecraft',
      stats: [
        { value: '1 Click', label: 'Servidor Minecraft' },
        { value: '50 GB', label: 'Por sala' },
        { value: '5 GB', label: 'Por archivo' },
      ],
    },
    features: {
      title: 'Seis cosas, bien hechas',
      subtitle: 'Connectea trae justo lo que necesitas para compartir archivos — simple y nada más. Gracias a los plugins, añades complejidad a tu manera, no a la nuestra.',
      items: [
        {
          icon: '🔒',
          title: 'Cifrado opcional de extremo a extremo',
          desc: 'Escribe una contraseña y el archivo se cifra en fragmentos de 10 MB con AES-256-GCM antes de salir de tu equipo. La integridad se verifica con SHA-256 al descargar. Connectea no puede descifrarlo.',
        },
        {
          icon: '⚡',
          title: 'Salas con código — sin registro',
          desc: 'Solo necesitas un nombre. Crea una sala, copia el código o link y pásaselo a quien quieras.',
        },
        {
          icon: '📁',
          title: 'Carpetas, drag-and-drop y ZIP',
          desc: 'Suelta archivos o árboles enteros — los directorios anidados se respetan.',
        },
        {
          icon: '🛡️',
          title: 'Acceso controlado',
          desc: 'Como propietario, restringe la sala a una lista curada y elige si cada usuario puede leer, escribir o ambas. Si revocas el acceso, el cambio se propaga en segundos.',
        },
        {
          icon: '🔌',
          title: 'Plugins',
          desc: 'Añade plugins a cualquier sala para funciones extra — por ejemplo, el plugin de Minecraft levanta un servidor en segundos y sincroniza los archivos del mundo con la sala. Gestiona todo desde la app. Más plugins en camino.',
        },
        {
          icon: ' ⚙️ ',
          title: 'Salas persistentes',
          desc: 'Mantén la sala abierta incluso cuando te desconectas con todos tus archivos y plugins intactos por un precio mensual asequible. Ideal para servidores de Minecraft o proyectos colaborativos.',
        },
      ],
    },
    howItWorks: {
      title: 'Instala ya y comparte tu primer archivo en menos de un minuto',
      subtitle: 'Sin cuenta, sin email de confirmación, sin asistente de configuración. Escribes un nombre y ya estás dentro.',
      steps: [
        {
          number: '01',
          title: 'Abre la app y escribe tu nombre',
          desc: 'No hay contraseña ni email. El nombre que escribes te identifica mientras estés conectado.',
        },
        {
          number: '02',
          title: 'Crea una sala o entra en una sala con su código',
          desc: 'Cada sala tiene un código corto. Crea una nueva y copia el código, o pega el que te han pasado.',
        },
        {
          number: '03',
          title: 'Suelta archivos — cifra si quieres',
          desc: 'Suelta archivos o carpetas. Añade una contraseña de cifrado si el contenido es sensible — quien descargue necesitará la misma contraseña para descifrar.',
        },
      ],
    },
    security: {
      badge: 'Seguridad',
      title: 'Criptografía',
      subtitle: 'Cuando pones contraseña, Connectea no la recibe. El cifrado ocurre en tu dispositivo; el servidor solo ve texto cifrado.',
      points: [
        'AES-256-GCM con un IV de 12 bytes nuevo por cada fragmento de 10 MB',
        'Derivación de clave PBKDF2-SHA-256, 100 000 iteraciones',
        'La contraseña y la clave nunca salen de tu dispositivo a no ser que la compartas',
        'El hash SHA-256 del contenido en claro se verifica tras descargar',
        'Los cambios de permisos invalidan el acceso en tiempo real',
        'Sin base de datos de cuentas — la identidad es solo un token de sesión ligado al nombre',
      ],
    },
    plugins: {
      badge: 'Nuestro plugin de servidor de Minecraft',
      title: 'Servidor de Minecraft en un click',
      subtitle: 'Añade el plugin de Minecraft a una sala, pulsa Iniciar — el servidor arranca y los archivos del mundo se sincronizan automáticamente. Gestiona todo desde la app. Más plugins en camino.',
      cta: 'Inicia ya tu servidor de Minecraft',
      features: [
        'Servidor de Minecraft en un click: añade el plugin, espera a que el servidor arranque y juega',
        'Los archivos del mundo y configuraciones viven en la sala — siempre sincronizados',
        'Modifica los archivos del servidor a tu gusto',
        'Inicia, detén y elimina plugins cuando quieras',
      ],
    },
    pricing: {
      title: 'Gratis para salas efímeras. Solo pagas si necesitas que duren.',
      subtitle: 'Mucha gente no necesitará pagar. El plan gratis ya incluye cifrado, allowlist, plugins y los 50 GB completos por sala.',
      free: {
        title: 'Gratis',
        price: '0 €',
        period: 'Para siempre',
        cta: 'Descargar Gratis',
        features: [
          'Salas efímeras (se cierran al irse el propietario)',
          'Hasta 5 GB por archivo, 50 GB por sala',
          'Cifrado de extremo a extremo AES-256-GCM',
          'Control de acceso a la sala',
          'Plugins (Beta)',
        ],
      },
      pro: {
        title: 'Sala permanente',
        badge: 'Suscripción',
        price: '5 €',
        period: 'sala / mes',
        cta: 'Hacer Permanente',
        features: [
          'Todo lo del plan gratis',
          'La sala sigue viva cuando te desconectas',
          'Contraseña de propiedad — cuando vuelvas, puedes reclamar la propiedad',
          'Útil para salas con plugin (servidores de Minecraft, proyectos colaborativos, etc.)',
          'Cancelable desde la app cuando quieras',
        ],
      },
    },
    download: {
      title: 'Pruébalo. Empieza a compartir archivos en segundos.',
      subtitle: 'Gratis para Windows. Sin email, sin contraseñas, sin complicaciones.',
      cta: 'Descargar para Windows',
      note: 'Windows 10 / 11 · Gratis · Sin cuenta · Doble clic al instalador y listo',
    },
    footer: {
      tagline: 'Compartir archivos cifrados en salas. Para quien no quiere otra cuenta más.',
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
      title: 'Connectea — Share files with friends, no sign-up required',
      description: 'Create a room, share the code, drop your files — done in seconds. No account, no email. Launch a Minecraft server in one click with the built-in plugin. Free for Windows.',
      keywords: 'share files with friends, share files without account, minecraft server plugin, one-click minecraft server, instant file transfer, encrypted file sharing, Windows',
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
      headline: 'Share files. No account, no drama.',
      subheadline: 'Create a room, share the code with your friends, and drop your files. Done in seconds. No email, no password — just a name. End-to-end encrypted. Spin up a Minecraft server in seconds.',
      cta_primary: 'Download Free',
      cta_secondary: 'Minecraft Server',
      stats: [
        { value: '1 Click', label: 'Minecraft Server' },
        { value: '50 GB', label: 'Per room' },
        { value: '5 GB', label: 'Per file' },
      ],
    },
    features: {
      title: 'Six things, done right',
      subtitle: 'Connectea gives you exactly what you need to share files — simple and nothing more. Plugins let you add complexity on your terms, not ours.',
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
          title: 'Folders, drag-and-drop and ZIP',
          desc: 'Drop files or entire folder trees — nested directories are preserved as-is.',
        },
        {
          icon: '🛡️',
          title: 'Controlled access',
          desc: 'As owner, lock the room to a curated list and choose whether each user can read, write, or both. Revoke access and the change propagates in seconds.',
        },
        {
          icon: '🔌',
          title: 'Plugins',
          desc: 'Add plugins to any room for extra functionality — for example, the Minecraft plugin spins up a server in seconds and keeps world files in sync with the room. Manage everything from the app. More plugins on the way.',
        },
        {
          icon: ' ⚙️ ',
          title: 'Persistent rooms',
          desc: 'Keep your room alive even when you disconnect — files and plugins intact — for a low monthly price. Perfect for Minecraft servers or collaborative projects.',
        },
      ],
    },
    howItWorks: {
      title: 'Install and share your first file in under a minute',
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
      title: 'Cryptography',
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
      title: 'Minecraft server in one click',
      subtitle: 'Add the Minecraft plugin to a room, hit Start — the server boots and world files sync automatically. Manage everything from the app. More plugins on the way.',
      cta: 'Start your Minecraft server now',
      features: [
        'Minecraft server in one click: add the plugin, wait for it to boot, and play',
        'World files and config live in the room — always in sync',
        'Edit server files however you like',
        'Start, stop and remove plugins whenever you want',
      ],
    },
    pricing: {
      title: 'Free for temporary rooms. Only pay if you need them to last.',
      subtitle: 'Most people won\'t need to pay. The free plan already includes encryption, allowlist, plugins and the full 50 GB per room.',
      free: {
        title: 'Free',
        price: '€0',
        period: 'Forever',
        cta: 'Download Free',
        features: [
          'Ephemeral rooms (close when the owner leaves)',
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
      title: 'Try it. Start sharing files in seconds.',
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
      title: 'Connectea — 与朋友分享文件，无需注册',
      description: '创建房间，分享代码，拖入文件 — 几秒搞定。无需账号，无需邮箱。内置插件一键启动 Minecraft 服务器。Windows 免费使用。',
      keywords: '与朋友分享文件, 无账号文件分享, Minecraft服务器插件, 一键创建Minecraft服务器, 即时文件传输, 加密文件分享, Windows',
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
      headline: '分享文件，无账号，不麻烦',
      subheadline: '创建一个房间，把代码分享给朋友，拖入文件，完成。几秒钟搞定。无需邮箱和密码 — 只要起个名字。端对端加密。几秒内启动 Minecraft 服务器。',
      cta_primary: '免费下载',
      cta_secondary: 'Minecraft 服务器',
      stats: [
        { value: '1 键', label: 'Minecraft 服务器' },
        { value: '50 GB', label: '每个房间' },
        { value: '5 GB', label: '每个文件' },
      ],
    },
    features: {
      title: '六个功能，件件到位',
      subtitle: 'Connectea 只给你分享文件需要的东西 — 简单，不多余。插件让你按自己的方式增加功能，而不是强迫你接受我们的方式。',
      items: [
        {
          icon: '🔒',
          title: '可选端对端加密',
          desc: '设置密码后，文件在离开你的设备前就被分成 10 MB 的片段，用 AES-256-GCM 加密。下载时用 SHA-256 验证完整性。Connectea 无法解密。',
        },
        {
          icon: '⚡',
          title: '代码房间 — 无需注册',
          desc: '只需要一个名字。创建房间，复制代码或链接，发给你想邀请的人就行。',
        },
        {
          icon: '📁',
          title: '文件夹、拖拽和 ZIP',
          desc: '拖入文件或整个文件夹树 — 嵌套目录完整保留，一个不少。',
        },
        {
          icon: '🛡️',
          title: '访问控制',
          desc: '作为房主，你可以把房间限制给特定用户，并为每个人设置读写权限。撤销权限后几秒内立即生效。',
        },
        {
          icon: '🔌',
          title: '插件',
          desc: '为任何房间添加插件以获得额外功能 — 比如 Minecraft 插件可以几秒内启动服务器，并自动将存档文件同步到房间。一切都在 app 内管理。更多插件即将上线。',
        },
        {
          icon: ' ⚙️ ',
          title: '持久房间',
          desc: '即使你断线，房间也继续存在 — 文件和插件完好无损 — 每月只需小额费用。适合 Minecraft 服务器或多人协作项目。',
        },
      ],
    },
    howItWorks: {
      title: '安装好，一分钟内分享第一个文件',
      subtitle: '无账号，无确认邮件，无设置向导。输入名字，直接开始。',
      steps: [
        {
          number: '01',
          title: '打开 app，输入你的名字',
          desc: '没有密码，没有邮箱。你输入的名字就是其他人在线看到你的方式。',
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
      title: '加密技术',
      subtitle: '设置密码时，Connectea 永远看不到它。加密发生在你的设备上 — 服务器只能看到密文。',
      points: [
        'AES-256-GCM 加密，每个 10 MB 分块使用全新的 12 字节 IV',
        'PBKDF2-SHA-256 密钥派生，100,000 次迭代',
        '密码和密钥永远不会离开你的设备，除非你主动分享',
        '下载后在本地验证明文内容的 SHA-256 哈希',
        '权限变更实时生效',
        '无账号数据库 — 身份只是一个与名字绑定的会话令牌',
      ],
    },
    plugins: {
      badge: '我们的 Minecraft 服务器插件',
      title: '一键启动 Minecraft 服务器',
      subtitle: '为房间添加 Minecraft 插件，点击启动 — 服务器自动运行，存档文件自动同步。一切在 app 内管理。更多插件即将推出。',
      cta: '现在启动你的 Minecraft 服务器',
      features: [
        '一键 Minecraft 服务器：添加插件，等待启动，开玩',
        '存档和配置文件保存在房间里 — 始终同步',
        '随意修改服务器文件',
        '随时启动、停止和删除插件',
      ],
    },
    pricing: {
      title: '临时房间免费用。需要长期保留才付费。',
      subtitle: '大多数人不需要付费。免费版已包含加密、白名单、插件以及每个房间完整的 50 GB 空间。',
      free: {
        title: '免费',
        price: '€0',
        period: '永久免费',
        cta: '免费下载',
        features: [
          '临时房间（房主离开即关闭）',
          '单文件最大 5 GB，每个房间最大 50 GB',
          'AES-256-GCM 端对端加密',
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
          '包含免费版所有功能',
          '断线后房间仍然保持开放',
          '所有权密码 — 随时回来认领房间',
          '适合插件房间（Minecraft 服务器、协作项目等）',
          '随时可在 app 内取消',
        ],
      },
    },
    download: {
      title: '试试看。几秒内开始分享文件。',
      subtitle: 'Windows 免费使用。无需邮箱、无需密码、无繁琐步骤。',
      cta: '下载 Windows 版',
      note: 'Windows 10 / 11 · 免费 · 无需账号 · 双击安装包，完成',
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
