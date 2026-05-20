export type Lang = 'en' | 'es' | 'zh';

export interface Translation {
  meta: { title: string; description: string; keywords: string };
  nav: { features: string; security: string; plugins: string; pricing: string; download: string };
  hero: {
    badge: string;
    badge2: string;
    headline: string;
    subheadline: string;
    cta_primary: string;
    cta_secondary: string;
    cta_minecraft: string;
    stats: Array<{ value: string; label: string }>;
  };
  permanentRoom: {
    badge: string;
    title: string;
    subtitle: string;
    bullets: string[];
    cta: string;
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
    cancelNote: string;
    free: { title: string; price: string; period: string; cta: string; features: string[] };
    pro: { title: string; badge: string; price: string; period: string; cta: string; features: string[] };
  };
  shareHighlight: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1: { icon: string; title: string; desc: string };
    card2: { icon: string; title: string; desc: string };
  };
  download: { title: string; subtitle: string; cta: string; note: string; smartscreenNote: string; trustNote: string };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    links: { features: string; security: string; pricing: string; download: string; privacy: string; terms: string; contact: string; privacyPolicy: string; about: string };
    copyright: string;
  };
  termsPage: {
    pageTitle: string;
    metaDescription: string;
    heading: string;
    lastUpdated: string;
    backHome: string;
    sections: Array<{
      title: string;
      paragraphs: string[];
      items?: string[];
      warning?: string;
    }>;
  };
  mobileGate: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    submitText: string;
    successText: string;
  };
  recoverPage: {
    pageTitle: string;
    metaDescription: string;
    heading: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorInvalid: string;
    errorGeneric: string;
    backHome: string;
    invalidLink: string;
    invalidLinkDesc: string;
  };
  privacyPage: {
    pageTitle: string;
    metaDescription: string;
    heading: string;
    lastUpdated: string;
    backHome: string;
    sections: Array<{ title: string; paragraphs: string[]; items?: string[] }>;
  };
  aboutPage: {
    pageTitle: string;
    metaDescription: string;
    heading: string;
    backHome: string;
    sections: Array<{ title: string; paragraphs: string[] }>;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    meta: {
      title: 'Connectea · Envía archivos grandes con enlace público — gratis, cifrado, sin cuenta',
      description: 'Envía archivos grandes con enlace permanente. Cifrado de extremo a extremo opcional. Sin cuenta, sin límites. ¿Servidor de Minecraft? También es posible.',
      keywords: 'enviar archivos grandes gratis, transferencia archivos grandes, compartir archivos enlace público, enlace permanente para compartir archivos, compartir archivos sin cuenta, subir archivos grandes sin límite, alternativa wetransfer, alternativa google drive, sala permanente archivos, servidor minecraft gratis',
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
      badge2: 'Cifrado AES-256-GCM',
      headline: 'Envía archivos grandes. Comparte con un enlace público. Sin cuenta, sin límites.',
      subheadline: 'Crea una sala, suelta tus archivos y comparte el enlace — quien lo reciba descarga directo desde el navegador. Cifrado opcional de extremo a extremo. ¿Lo necesitas siempre online? Convierte la sala en permanente por 5 €/mes.',
      cta_primary: 'Descargar Gratis',
      cta_secondary: 'Cómo funciona',
      cta_minecraft: '¿Buscas levantar un servidor de Minecraft? Sigue siendo posible →',
      stats: [
        { value: '1 Clic', label: 'Enlace público' },
        { value: 'Sin límite', label: 'Por archivo' },
        { value: '5 €/mes', label: 'Sala permanente' },
      ],
    },
    permanentRoom: {
      badge: 'SALA PERMANENTE',
      title: 'Tu nube personal sin cuotas absurdas',
      subtitle: 'Una sala permanente es tu espacio siempre disponible: el enlace no caduca, nadie necesita cuenta — ni para subir ni para descargar — y solo tú controlas quién entra.',
      bullets: [
        'Sin caducidad — el enlace funciona mientras la sala esté activa',
        'Sin cuentas para nadie — ni quien comparte ni quien descarga, solo un nombre',
        'Contraseña de propietario — solo tú reclamas la sala al volver',
        'Plugins opcionales: servidor de Minecraft, proyectos colaborativos y más',
        'WeTransfer: enlaces caducan en 7 días · Drive requiere cuenta Google · Smash borra archivos automáticamente',
      ],
      cta: 'Ver precios',
    },
    features: {
      title: 'Todo lo que necesitas para compartir archivos, nada más',
      subtitle: 'Archivos de cualquier tamaño, enlaces públicos, cifrado E2E opcional. Sin cuenta, sin límites artificiales.',
      items: [
        {
          icon: '🔗',
          title: 'Enlace público — un clic',
          desc: 'Haz público cualquier archivo con un clic y copia el enlace. Quien lo reciba descarga directo desde el navegador — sin instalar nada, sin registrarse. Tú tampoco tienes cuenta: solo un nombre de sesión.',
        },
        {
          icon: '📦',
          title: 'Sin límite de tamaño por archivo',
          desc: 'Sube archivos de cualquier tamaño. Connectea los divide en fragmentos y los transfiere automáticamente, sin restricciones artificiales de tamaño.',
        },
        {
          icon: '🔒',
          title: 'Cifrado de extremo a extremo opcional',
          desc: 'Escribe una contraseña y el archivo se cifra con AES-256-GCM antes de salir de tu equipo. Connectea no puede descifrarlo.',
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
          desc: 'Restringe la sala a una lista de usuarios y define si cada uno puede leer, escribir o ambas. Revoca el acceso y el cambio se aplica en segundos.',
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
          title: 'Suelta archivos, comparte o cifra',
          desc: 'Suelta archivos de cualquier tamaño. Haz público cualquier archivo con un clic para generar un enlace de descarga directa. Añade contraseña de cifrado si el contenido es sensible — Connectea nunca la ve.',
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
        'Sin adware, sin bundles, sin minería ni telemetría publicitaria. El instalador solo contiene Connectea.',
      ],
    },
    plugins: {
      badge: 'CASO DE USO · MINECRAFT',
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
      subtitle: 'La mayoría no necesitará pagar. El plan gratuito incluye cifrado, lista de acceso, plugins y almacenamiento ampliable.',
      cancelNote: 'Cancelable en cualquier momento desde la app. Sin tarjeta para el plan gratuito.',
      free: {
        title: 'Gratis',
        price: '0 €',
        period: 'Para siempre',
        cta: 'Descargar Gratis',
        features: [
          'Salas temporales (se cierran al irse el propietario)',
          'Sin límite de tamaño por archivo · sube lo que necesites',
          'Enlace público para compartir archivos con cualquiera',
          'Ampliar almacenamiento: +10 GB por €1 (pago único por sala)',
          'Cifrado de extremo a extremo AES-256-GCM',
          'Control de acceso · Plugins (Beta)',
        ],
      },
      pro: {
        title: 'Sala Permanente',
        badge: 'Recomendado',
        price: '5 €',
        period: 'sala / mes',
        cta: 'Activar sala permanente',
        features: [
          'Todo lo del plan gratuito',
          'La sala sigue activa aunque te desconectes',
          'Contraseña de propiedad — puedes reclamar la sala cuando vuelvas',
          'Perfecto para salas con plugin (servidores de Minecraft, proyectos colaborativos, etc.)',
          'Ideal como reemplazo permanente de WeTransfer / Drive para freelancers y equipos pequeños',
          'Cancelable desde la app cuando quieras',
        ],
      },
    },
    download: {
      title: 'Descárgalo gratis. Comparte tu primer archivo en menos de un minuto.',
      subtitle: 'Gratis para Windows. Sin email, sin contraseñas, sin complicaciones.',
      cta: 'Descargar para Windows',
      note: 'Windows 10 / 11 · Gratis · Sin cuenta · Doble clic en el instalador y listo',
      smartscreenNote: 'Windows puede mostrar un aviso de seguridad al abrir el instalador. Esto es completamente normal en aplicaciones nuevas de desarrolladores independientes — Connectea es seguro. Haz clic en «Más información» → «Ejecutar de todas formas» para continuar.',
      trustNote: 'Software desarrollado por Connectea. Sin bundles, sin software adicional, sin tracking publicitario.',
    },
    shareHighlight: {
      eyebrow: 'Archivos grandes · Enlace público',
      title: 'Transfiere cualquier archivo. Comparte al instante.',
      subtitle: 'Sin límite de tamaño por archivo. Haz público cualquier archivo en un clic y comparte el enlace — quien lo reciba puede descargarlo directamente desde el navegador, sin instalar nada.',
      card1: {
        icon: '📦',
        title: 'Sin límite de tamaño',
        desc: 'Sube archivos de cualquier tamaño. Connectea los divide en fragmentos de 10 MB y los transfiere automáticamente. Vídeos 4K, backups, archivos ISO — todo vale.',
      },
      card2: {
        icon: '🔗',
        title: 'Enlace público en un clic',
        desc: 'Como propietario de la sala, haz público cualquier archivo y copia el enlace. Quien lo reciba descarga directo desde el navegador — nadie necesita cuenta, ni tú ni ellos.',
      },
    },
    footer: {
      tagline: 'Envía archivos grandes con enlace público permanente. Sin cuenta. Cifrado E2E opcional. Sala permanente desde 5 €/mes.',
      product: 'Producto',
      legal: 'Legal',
      links: {
        features: 'Funciones',
        security: 'Seguridad',
        pricing: 'Precios',
        download: 'Descargar',
        privacy: 'Reportar un bug',
        terms: 'Términos y condiciones',
        contact: 'Escríbenos',
        privacyPolicy: 'Política de privacidad',
        about: 'Quién somos',
      },
      copyright: '© 2026 Connectea. Todos los derechos reservados.',
    },
    termsPage: {
      pageTitle: 'Términos y condiciones | Connectea',
      metaDescription: 'Lee los términos y condiciones de uso de Connectea. Información sobre la responsabilidad del usuario, el cifrado de extremo a extremo y la política de contenidos.',
      heading: 'Términos y condiciones',
      lastUpdated: 'Última actualización: abril de 2026',
      backHome: 'Volver al inicio',
      sections: [
        {
          title: '1. Aceptación de los términos',
          paragraphs: [
            'Al descargar, instalar o utilizar Connectea («el Servicio»), aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguno de estos términos, no utilices el Servicio.',
          ],
        },
        {
          title: '2. Responsabilidad del usuario sobre el contenido',
          paragraphs: [
            'Eres el único responsable de todos los archivos, datos y contenidos que subas a las salas de Connectea. Connectea no reclama la propiedad de tu contenido y no revisa ni monitoriza de manera proactiva los archivos subidos al Servicio.',
            'Al subir contenido, declaras y garantizas que tienes el derecho legal de subir, compartir y distribuir dicho contenido, que no infringe ninguna ley ni normativa aplicable y que no vulnera derechos de propiedad intelectual de terceros.',
            'Connectea no se hace responsable de ningún contenido subido por los usuarios. Eres el único responsable de asegurarte de que tu uso del Servicio cumple con todas las leyes aplicables en tu jurisdicción.',
          ],
        },
        {
          title: '3. Contenido prohibido',
          paragraphs: [
            'No puedes utilizar Connectea para subir, compartir o distribuir ninguno de los siguientes tipos de contenido:',
          ],
          items: [
            'Contenido ilegal conforme a cualquier ley aplicable.',
            'Contenido que infrinja derechos de autor, marcas registradas u otros derechos de propiedad intelectual.',
            'Material de abuso sexual infantil (CSAM) o cualquier contenido que explote sexualmente a menores.',
            'Software malicioso, virus u otro código dañino.',
            'Contenido que facilite, promueva o incite a realizar actividades ilegales.',
          ],
        },
        {
          title: '4. Moderación y eliminación de contenido',
          paragraphs: [
            'Connectea no revisa ni monitoriza de manera proactiva archivos individuales ni la actividad de usuarios concretos. Respetamos la privacidad y minimizamos la recopilación de datos.',
            'No obstante, Connectea se reserva el derecho de eliminar cualquier contenido — incluyendo archivos, salas o accesos de usuarios — que nos sea denunciado o respecto al cual tengamos indicios fundados de que infringe estos términos o la ley aplicable. Podemos actuar en respuesta a denuncias de usuarios o terceros, requerimientos legales (como órdenes judiciales o solicitudes de autoridades competentes) o sospechas razonables de actividad ilegal.',
          ],
        },
        {
          title: '5. Cifrado de extremo a extremo',
          paragraphs: [
            'Cuando cifras un archivo con contraseña, el proceso de cifrado ocurre íntegramente en tu dispositivo antes de que el archivo sea transmitido a nuestros servidores. Connectea utiliza cifrado AES-256-GCM con derivación de clave PBKDF2-SHA-256.',
            'Tu contraseña de cifrado nunca se envía a los servidores de Connectea; la clave se genera localmente y jamás abandona tu dispositivo. Esto significa que Connectea no puede descifrar tus archivos — es una imposibilidad técnica. Ningún empleado, administrador ni sistema de Connectea puede acceder al contenido de tus archivos cifrados, incluso en respuesta a requerimientos legales, ya que simplemente no disponemos de esa capacidad técnica.',
          ],
          warning: 'Si pierdes la contraseña de cifrado, el contenido de los archivos cifrados no podrá ser recuperado por nadie, incluido Connectea.',
        },
        {
          title: '6. Limitación de responsabilidad',
          paragraphs: [
            'El Servicio se proporciona «tal cual», sin garantías de ningún tipo. Connectea no será responsable de ningún contenido subido por los usuarios, de ninguna pérdida de datos — incluidos archivos cifrados cuya contraseña se haya perdido — ni de ningún daño indirecto, incidental o consecuente derivado del uso del Servicio.',
          ],
        },
        {
          title: '7. Modificaciones a estos términos',
          paragraphs: [
            'Connectea se reserva el derecho de modificar estos términos en cualquier momento. Los cambios se publicarán en esta página. El uso continuado del Servicio tras la publicación de los cambios constituye la aceptación de los nuevos términos.',
          ],
        },
        {
          title: '8. Contacto',
          paragraphs: [
            'Para consultas legales o para reportar una infracción, escríbenos a legal@connectea.net. Para preguntas generales: contact@connectea.net.',
          ],
        },
      ],
    },
    mobileGate: {
      eyebrow: 'Solo para Windows',
      title: 'Connectea es una app de Windows',
      subtitle: 'Connectea funciona en Windows 10 / 11. Introduce tu email y te enviamos el enlace de descarga para instalarlo en tu PC más tarde.',
      emailPlaceholder: 'tu@email.com',
      submitText: 'Enviarme el enlace de descarga',
      successText: '¡Listo! Revisa tu bandeja de entrada — el enlace está en camino.',
    },
    recoverPage: {
      pageTitle: 'Recuperar contraseña de propiedad | Connectea',
      metaDescription: 'Establece una nueva contraseña de propiedad para tu sala permanente de Connectea.',
      heading: 'Nueva contraseña de propiedad',
      subtitle: 'Elige una nueva contraseña para tu sala permanente. Usa una contraseña segura — cualquiera que la tenga puede reclamar la propiedad.',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      passwordLabel: 'Nueva contraseña de propiedad',
      passwordPlaceholder: 'Mínimo 8 caracteres',
      submit: 'Actualizar contraseña',
      submitting: 'Actualizando…',
      successTitle: '¡Contraseña actualizada!',
      successMessage: 'Tu contraseña de propiedad ha sido actualizada. Abre la app de Connectea y reclama la propiedad de tu sala.',
      errorInvalid: 'Este enlace no es válido o ha caducado. Solicita un nuevo email de recuperación desde la app.',
      errorGeneric: 'Algo ha ido mal. Inténtalo de nuevo o solicita un nuevo email de recuperación.',
      backHome: 'Volver al inicio',
      invalidLink: 'Enlace no válido o caducado',
      invalidLinkDesc: 'Este enlace de recuperación no es válido o ha caducado. Vuelve a la app y solicita uno nuevo.',
    },
    privacyPage: {
      pageTitle: 'Política de privacidad | Connectea',
      metaDescription: 'Información sobre qué datos recoge Connectea, cómo los utiliza y cómo ejercer tus derechos.',
      heading: 'Política de privacidad',
      lastUpdated: 'Última actualización: mayo de 2026',
      backHome: 'Volver al inicio',
      sections: [
        {
          title: '1. Información que recopilamos',
          paragraphs: [
            'Connectea recoge la mínima información posible para funcionar. A continuación se detalla qué datos pueden recogerse según el uso que hagas del servicio.',
          ],
          items: [
            'Analítica de uso anónima: utilizamos Vercel Web Analytics para medir visitas a la web. No recoge información personal identificable.',
            'TikTok Pixel y Google Ads: utilizamos estos píxeles para medir el rendimiento de nuestra publicidad. Recogen datos de navegación según sus respectivas políticas.',
            'Email (opcional): si introduces tu dirección de correo en el formulario de notificación de descarga (solo visible en dispositivos móviles), la usamos únicamente para enviarte el enlace de descarga.',
            'NO recopilamos: el contenido de tus archivos, tus contraseñas de cifrado ni ningún dato personal más allá de lo indicado.',
          ],
        },
        {
          title: '2. Uso de los datos',
          paragraphs: [
            'Los datos de analítica se usan para mejorar el producto y medir el rendimiento de los anuncios. Los emails de descarga se usan exclusivamente para enviarte el enlace y se eliminan una vez cumplida esa función.',
          ],
        },
        {
          title: '3. Retención de datos',
          paragraphs: [
            'Los tokens de sesión de Connectea expiran cuando se cierra la sala. Los emails de descarga se eliminan tras el envío del enlace. Los datos de analítica se retienen según las políticas de Vercel, TikTok y Google.',
          ],
        },
        {
          title: '4. Tus derechos',
          paragraphs: [
            'Puedes solicitar la eliminación de cualquier dato personal que hayamos podido recoger escribiéndonos a legal@connectea.net.',
          ],
        },
        {
          title: '5. Contacto',
          paragraphs: [
            'Para cualquier consulta sobre privacidad: legal@connectea.net.',
          ],
        },
      ],
    },
    aboutPage: {
      pageTitle: 'Quiénes somos | Connectea',
      metaDescription: 'Conoce al equipo detrás de Connectea, la herramienta de transferencia de archivos grandes con enlace público y servidor Minecraft en un clic.',
      heading: 'Quiénes somos',
      backHome: 'Volver al inicio',
      sections: [
        {
          title: 'El equipo detrás de Connectea',
          paragraphs: [
            'Connectea es un proyecto desarrollado de forma independiente por Iván Navas, desarrollador de software con sede en España.',
            'El objetivo es simple: una herramienta de transferencia de archivos que funcione sin fricciones — sin cuentas obligatorias, sin límites de tamaño artificiales y con cifrado de extremo a extremo cuando se necesita.',
          ],
        },
        {
          title: 'Por qué existe Connectea',
          paragraphs: [
            'La mayoría de herramientas de transferencia de archivos te obligan a registrarte, caducan los enlaces o limitan el tamaño. Connectea nació para eliminar esas fricciones.',
            'El plugin de Minecraft fue el primer caso de uso — una sala permanente con el servidor sincronizado. Pero el corazón del producto es el file sharing: rápido, cifrado y accesible desde cualquier navegador sin instalar nada.',
          ],
        },
        {
          title: 'Contacto',
          paragraphs: [
            'Consultas generales: contact@connectea.net',
            'Asuntos legales o privacidad: legal@connectea.net',
            'Reporte de bugs: bug-report@connectea.net',
          ],
        },
      ],
    },
  },

  en: {
    meta: {
      title: 'Connectea · Send large files with a public link — free, encrypted, no account',
      description: 'Send big files with a permanent link. End-to-end encryption optional. No account, no limits. Run a Minecraft server too if you want.',
      keywords: 'send large files free, transfer large files no limit, share large files public link, permanent file sharing link, file sharing no account, unlimited file transfer, wetransfer alternative, google drive alternative, permanent file room, free minecraft server',
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
      badge2: 'AES-256-GCM Encrypted',
      headline: 'Send big files. Share them with a public link. No account, no limits.',
      subheadline: 'Create a room, drop your files and share the link — recipients download straight from their browser. Optional end-to-end encryption. Need it always online? Make the room permanent for €5/month.',
      cta_primary: 'Download Free',
      cta_secondary: 'How it works',
      cta_minecraft: 'Looking to run a Minecraft server? That\'s still possible →',
      stats: [
        { value: '1 Click', label: 'Public link' },
        { value: 'No limit', label: 'Per file' },
        { value: '€5/mo', label: 'Permanent room' },
      ],
    },
    permanentRoom: {
      badge: 'PERMANENT ROOM',
      title: 'Your personal cloud, without the absurd fees',
      subtitle: 'A permanent room is your always-on space: links never expire, nobody needs an account — not you, not your recipients — and only you control who gets in.',
      bullets: [
        'No expiry — link works as long as the room is active',
        'No accounts for anyone — sharing and downloading both work with just a name',
        'Ownership password — only you can reclaim the room when you return',
        'Optional plugins: Minecraft server, collaborative projects, and more',
        'WeTransfer links expire in 7 days · Drive requires a Google account · Smash auto-deletes files',
      ],
      cta: 'See pricing',
    },
    features: {
      title: 'Everything you need to share files — nothing you don\'t',
      subtitle: 'Any file size, public links, optional E2E encryption. No account, no artificial limits.',
      items: [
        {
          icon: '🔗',
          title: 'Public link — one click',
          desc: 'Make any file public with one click and copy the link. Recipients download straight from their browser — no install, no sign-up. You don\'t have an account either: just a session name.',
        },
        {
          icon: '📦',
          title: 'No file size limit',
          desc: 'Upload files of any size. Connectea chunks them automatically and transfers everything without artificial size restrictions.',
        },
        {
          icon: '🔒',
          title: 'Optional end-to-end encryption',
          desc: 'Set a password and your file is encrypted with AES-256-GCM before it ever leaves your machine. Connectea can\'t decrypt it.',
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
          desc: 'Lock the room to a curated list and set read/write permissions per user. Revoke access and the change takes effect in seconds.',
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
          title: 'Drop files, share or encrypt',
          desc: 'Drop files of any size. Make any file public with one click to share a direct download link. Add an encryption password if the content is sensitive — Connectea never sees it.',
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
        'No adware, no bundles, no mining, no ad telemetry. The installer contains only Connectea.',
      ],
    },
    plugins: {
      badge: 'USE CASE · MINECRAFT',
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
      subtitle: 'Most people won\'t need to pay. The free plan includes encryption, allowlist, plugins, and expandable storage.',
      cancelNote: 'Cancel anytime from the app. No credit card required for the free plan.',
      free: {
        title: 'Free',
        price: '€0',
        period: 'Forever',
        cta: 'Download Free',
        features: [
          'Temporary rooms (close when the owner leaves)',
          'No per-file size limit · upload as much as you need',
          'Public links — share files with anyone',
          'Expand storage: +10 GB for €1 (one-time, per room)',
          'AES-256-GCM end-to-end encryption',
          'Room access control · Plugins (Beta)',
        ],
      },
      pro: {
        title: 'Permanent Room',
        badge: 'Recommended',
        price: '€5',
        period: 'room / month',
        cta: 'Activate permanent room',
        features: [
          'Everything in the free plan',
          'Room stays alive when you disconnect',
          'Ownership password — reclaim ownership anytime',
          'Expandable storage: +10 GB for €1 per expansion',
          'Ideal permanent replacement for WeTransfer / Drive for freelancers and small teams',
          'Cancel from the app whenever you want',
        ],
      },
    },
    download: {
      title: 'Try it free. Share your first file in under a minute.',
      subtitle: 'Free for Windows. No email, no passwords, no hassle.',
      cta: 'Download for Windows',
      note: 'Windows 10 / 11 · Free · No account · Double-click the installer and you\'re done',
      smartscreenNote: 'Windows may show a security warning when opening the installer. This is completely normal for new apps from independent developers — Connectea is safe. Click «More info» → «Run anyway» to continue.',
      trustNote: 'Software developed by Connectea. No bundles, no extra software, no ad tracking.',
    },
    shareHighlight: {
      eyebrow: 'Large files · Public links',
      title: 'Transfer anything. Share instantly.',
      subtitle: 'No per-file size limit. Make any file public with one click and share the link — anyone can download straight from their browser. No accounts on either end: Connectea runs on name-based sessions.',
      card1: {
        icon: '📦',
        title: 'No file size limit',
        desc: 'Upload files of any size — 4K videos, full game backups, ISO images. Connectea splits them into 10 MB chunks and transfers them automatically.',
      },
      card2: {
        icon: '🔗',
        title: 'Public link in one click',
        desc: 'As room owner, mark any file as public and copy the link. Recipients download straight from their browser — no account for anyone, no app required.',
      },
    },
    footer: {
      tagline: 'Send large files with a permanent public link. No account. Optional E2E encryption. Permanent room from €5/month.',
      product: 'Product',
      legal: 'Legal',
      links: {
        features: 'Features',
        security: 'Security',
        pricing: 'Pricing',
        download: 'Download',
        privacy: 'Report a bug',
        terms: 'Terms & Conditions',
        contact: 'Write to us',
        privacyPolicy: 'Privacy Policy',
        about: 'About Connectea',
      },
      copyright: '© 2026 Connectea. All rights reserved.',
    },
    termsPage: {
      pageTitle: 'Terms & Conditions | Connectea',
      metaDescription: 'Read Connectea\'s Terms & Conditions. Information on user responsibility, end-to-end encryption, and content policy.',
      heading: 'Terms & Conditions',
      lastUpdated: 'Last updated: April 2026',
      backHome: 'Back to home',
      sections: [
        {
          title: '1. Acceptance of Terms',
          paragraphs: [
            'By downloading, installing, or using Connectea ("the Service"), you agree to be bound by these Terms of Service. If you do not agree with any of these terms, do not use the Service.',
          ],
        },
        {
          title: '2. User Responsibility for Content',
          paragraphs: [
            'You are solely responsible for all files, data, and content you upload to Connectea rooms. Connectea does not claim ownership of your content and does not proactively review or monitor files uploaded to the Service.',
            'By uploading content, you represent and warrant that you have the legal right to upload, share, and distribute that content, that it does not violate any applicable law or regulation, and that it does not infringe any third-party intellectual property rights.',
            'Connectea is not liable for any content uploaded by users. You are solely responsible for ensuring your use of the Service complies with all applicable laws in your jurisdiction.',
          ],
        },
        {
          title: '3. Prohibited Content',
          paragraphs: [
            'You may not use Connectea to upload, share, or distribute any of the following:',
          ],
          items: [
            'Content that is illegal under any applicable law.',
            'Content that infringes copyright, trademark, or other intellectual property rights.',
            'Child sexual abuse material (CSAM) or any content that sexually exploits minors.',
            'Malware, viruses, or other malicious code.',
            'Content that facilitates, promotes, or incites illegal activity.',
          ],
        },
        {
          title: '4. Content Moderation and Removal',
          paragraphs: [
            'Connectea does not proactively review or monitor individual files or specific user activity. We respect privacy and minimize data collection.',
            'However, Connectea reserves the right to remove any content — including files, rooms, or user access — that is reported to us or for which we have reasonable grounds to suspect a violation of these terms or applicable law. We may act in response to reports from users or third parties, legal notices (such as court orders or law enforcement requests), or reasonable suspicion of illegal activity.',
          ],
        },
        {
          title: '5. End-to-End Encryption',
          paragraphs: [
            'When you encrypt a file with a password, the encryption process happens entirely on your device before the file is transmitted to our servers. Connectea uses AES-256-GCM encryption with PBKDF2-SHA-256 key derivation.',
            'Your encryption password is never sent to Connectea\'s servers; the key is derived locally and never leaves your device. This means Connectea cannot decrypt your files — it is technically impossible. No Connectea employee, administrator, or system can access the content of your encrypted files, even in response to legal requests, because we simply do not have that technical capability.',
          ],
          warning: 'If you lose your encryption password, the content of your encrypted files cannot be recovered by anyone, including Connectea.',
        },
        {
          title: '6. Disclaimer',
          paragraphs: [
            'The Service is provided "as is" without warranties of any kind. Connectea is not liable for any content uploaded by users, any loss of data — including encrypted files whose password has been lost — or any indirect, incidental, or consequential damages arising from use of the Service.',
          ],
        },
        {
          title: '7. Changes to These Terms',
          paragraphs: [
            'Connectea reserves the right to modify these terms at any time. Changes will be posted on this page. Continued use of the Service after changes are posted constitutes acceptance of the updated terms.',
          ],
        },
        {
          title: '8. Contact',
          paragraphs: [
            'For legal inquiries or to report a violation, contact us at legal@connectea.net. For general questions: contact@connectea.net.',
          ],
        },
      ],
    },
    mobileGate: {
      eyebrow: 'Windows only',
      title: 'Connectea is a Windows app',
      subtitle: 'Connectea runs on Windows 10 / 11. Enter your email and we\'ll send you the download link so you can install it on your PC later.',
      emailPlaceholder: 'your@email.com',
      submitText: 'Send me the download link',
      successText: 'Done! Check your inbox — the link is on its way.',
    },
    recoverPage: {
      pageTitle: 'Recover Ownership Password | Connectea',
      metaDescription: 'Set a new ownership password for your Connectea permanent room.',
      heading: 'Set New Ownership Password',
      subtitle: 'Enter a new password for your permanent room. Make sure it\'s strong — anyone with it can claim ownership.',
      emailLabel: 'Email address',
      emailPlaceholder: 'your@email.com',
      passwordLabel: 'New ownership password',
      passwordPlaceholder: 'At least 8 characters',
      submit: 'Update Password',
      submitting: 'Updating…',
      successTitle: 'Password updated!',
      successMessage: 'Your ownership password has been updated. Open the Connectea app and claim ownership of your room.',
      errorInvalid: 'This link is invalid or has expired. Request a new recovery email from the app.',
      errorGeneric: 'Something went wrong. Try again or request a new recovery email.',
      backHome: 'Back to home',
      invalidLink: 'Invalid or expired link',
      invalidLinkDesc: 'This recovery link is invalid or has expired. Go back to the app and request a new one.',
    },
    privacyPage: {
      pageTitle: 'Privacy Policy | Connectea',
      metaDescription: 'Information about what data Connectea collects, how it is used, and how to exercise your rights.',
      heading: 'Privacy Policy',
      lastUpdated: 'Last updated: May 2026',
      backHome: 'Back to home',
      sections: [
        {
          title: '1. Information We Collect',
          paragraphs: [
            'Connectea collects the minimum information necessary to operate. Below is a breakdown of what may be collected depending on how you use the service.',
          ],
          items: [
            'Anonymous usage analytics: we use Vercel Web Analytics to measure site visits. No personally identifiable information is collected.',
            'TikTok Pixel and Google Ads: we use these pixels to measure the performance of our advertising. They collect browsing data according to their respective policies.',
            'Email (optional): if you enter your email address in the download notification form (shown only to mobile visitors), we use it solely to send you the download link.',
            'We do NOT collect: your file contents, encryption passwords, or any personal data beyond what is listed above.',
          ],
        },
        {
          title: '2. How We Use Your Data',
          paragraphs: [
            'Analytics data is used to improve the product and measure ad performance. Download emails are used exclusively to send you the link and are deleted once that is done.',
          ],
        },
        {
          title: '3. Data Retention',
          paragraphs: [
            'Connectea session tokens expire when a room closes. Download emails are deleted after the link is sent. Analytics data is retained according to the policies of Vercel, TikTok, and Google.',
          ],
        },
        {
          title: '4. Your Rights',
          paragraphs: [
            'You may request deletion of any personal data we may hold by writing to legal@connectea.net.',
          ],
        },
        {
          title: '5. Contact',
          paragraphs: [
            'For any privacy-related questions: legal@connectea.net.',
          ],
        },
      ],
    },
    aboutPage: {
      pageTitle: 'About Connectea',
      metaDescription: 'Learn about the team behind Connectea — the large-file sharing tool with public links, optional E2E encryption, and one-click Minecraft servers.',
      heading: 'About Connectea',
      backHome: 'Back to home',
      sections: [
        {
          title: 'The team behind Connectea',
          paragraphs: [
            'Connectea is an independent project developed by Iván Navas, a software developer based in Spain.',
            'The goal is simple: a file-sharing tool that works without friction — no mandatory accounts, no artificial size limits, and end-to-end encryption when you need it.',
          ],
        },
        {
          title: 'Why Connectea exists',
          paragraphs: [
            'Most file-sharing tools require sign-up, expire links, or cap file sizes. Connectea was built to eliminate that friction.',
            'The Minecraft plugin was the first use case — a permanent room with a synced server. But the heart of the product is file sharing: fast, encrypted, and accessible from any browser without installing anything.',
          ],
        },
        {
          title: 'Contact',
          paragraphs: [
            'General inquiries: contact@connectea.net',
            'Legal or privacy matters: legal@connectea.net',
            'Bug reports: bug-report@connectea.net',
          ],
        },
      ],
    },
  },

  zh: {
    meta: {
      title: 'Connectea · 大文件传输·公开链接分享·免费，加密，无需账号',
      description: '生成永久公开链接，发送大文件。可选端到端加密。无需账号，无大小限制。也可搭建 Minecraft 服务器。',
      keywords: '大文件传输免费, 传输大文件无限制, 公开链接分享文件, 永久文件分享链接, 文件分享无需账号, WeTransfer 替代, Google Drive 替代, 永久文件房间, 免费 Minecraft 服务器, 一键搭建 Minecraft 服务器',
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
      badge2: 'AES-256-GCM 加密',
      headline: '发送大文件，生成公开链接，无需账号，无大小限制',
      subheadline: '创建房间，拖入文件，分享链接 — 对方直接在浏览器下载。任何人无需账号，包括你自己，只需输入名字即可开始。可选端到端加密。需要始终在线？设为永久房间，每月仅需 €5。',
      cta_primary: '免费下载',
      cta_secondary: '了解如何使用',
      cta_minecraft: '想搭建 Minecraft 服务器？这里也可以 →',
      stats: [
        { value: '1 键', label: '公开链接' },
        { value: '无限制', label: '文件大小' },
        { value: '€5/月', label: '永久房间' },
      ],
    },
    permanentRoom: {
      badge: '永久房间',
      title: '你的个人云端空间，告别荒谬收费',
      subtitle: '永久房间让你的空间始终在线：链接永不过期，任何人无需账号（上传下载均如此），只有你掌控访问权限。',
      bullets: [
        '永不过期 — 房间活跃期间链接始终有效',
        '任何人无需账号 — 上传和下载都只需一个名字，无需注册',
        '所有权密码 — 只有你能在回来后重新认领房间',
        '可选插件：Minecraft 服务器、协作项目等',
        'WeTransfer 链接 7 天后过期 · Drive 需要 Google 账号 · Smash 自动删除文件',
      ],
      cta: '查看定价',
    },
    features: {
      title: '文件分享所需的一切，没有多余',
      subtitle: '任意文件大小，公开链接，可选端到端加密。无账号，无人为限制。',
      items: [
        {
          icon: '🔗',
          title: '公开链接 — 一键搞定',
          desc: '一键将任意文件设为公开，复制链接。对方直接在浏览器下载。任何人无需账号，包括你自己 — Connectea 用名字会话运行，无需注册。',
        },
        {
          icon: '📦',
          title: '无文件大小限制',
          desc: '上传任意大小的文件。Connectea 自动分成 10 MB 分块传输，无人为大小限制。',
        },
        {
          icon: '🔒',
          title: '可选端到端加密',
          desc: '设置密码后，文件用 AES-256-GCM 加密，离开设备前完成。Connectea 无法解密。',
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
          desc: '将房间限制给特定用户，为每人设置读写权限。撤销权限后几秒内立即生效。',
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
          title: '拖入文件，分享或加密',
          desc: '拖入任意大小的文件。一键设为公开，生成直接下载链接。内容敏感时设置加密密码 — Connectea 永远看不到你的密码。',
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
        '无广告软件，无捆绑包，无挖矿，无广告遥测。安装包只含 Connectea。',
      ],
    },
    plugins: {
      badge: '应用场景 · MINECRAFT',
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
      subtitle: '大多数人无需付费。免费版包含加密、访问白名单、插件，并支持按需扩容。',
      cancelNote: '可随时在应用内取消。免费版无需银行卡。',
      free: {
        title: '免费',
        price: '€0',
        period: '永久免费',
        cta: '免费下载',
        features: [
          '临时房间（房主离开即关闭）',
          '无单文件大小限制 · 按需上传，不设上限',
          '公开链接 — 与任何人分享文件',
          '扩容存储：+10 GB / €1（按需购买，每个房间）',
          'AES-256-GCM 端到端加密',
          '访问控制 · 插件（测试版）',
        ],
      },
      pro: {
        title: '永久房间',
        badge: '推荐',
        price: '€5',
        period: '房间 / 月',
        cta: '激活永久房间',
        features: [
          '包含免费版全部功能',
          '断线后房间仍然保持开放',
          '所有权密码 — 随时回来重新认领房间',
          '扩容存储：+10 GB / €1（同样适用）',
          '适合自由职业者和小团队替代 WeTransfer / Drive 的永久方案',
          '随时可在 app 内取消订阅',
        ],
      },
    },
    download: {
      title: '免费试用，几秒内开始分享文件。',
      subtitle: 'Windows 免费使用。无需邮箱、无需密码、无繁琐步骤。',
      cta: '下载 Windows 版',
      note: 'Windows 10 / 11 · 免费 · 无需账号 · 双击安装包即可完成',
      smartscreenNote: '打开安装包时 Windows 可能会显示安全提示。这对独立开发者发布的新应用来说完全正常——Connectea 安全可靠，请放心使用。点击「更多信息」→「仍然运行」即可继续安装。',
      trustNote: 'Connectea 自主开发。无捆绑软件，无附加程序，无广告追踪。',
    },
    shareHighlight: {
      eyebrow: '大文件 · 公开链接',
      title: '传输任意文件，即刻分享。',
      subtitle: '无单文件大小限制。一键设为公开，分享链接 — 任何人无需账号（上传下载皆然），对方直接在浏览器下载。',
      card1: {
        icon: '📦',
        title: '无文件大小限制',
        desc: '上传任意大小的文件 — 4K 视频、完整游戏存档、ISO 镜像。Connectea 自动分块，无需手动处理。',
      },
      card2: {
        icon: '🔗',
        title: '一键生成公开链接',
        desc: '作为房主，将任意文件设为公开并复制链接。对方直接在浏览器下载 — 任何人无需账号，无需安装任何软件。',
      },
    },
    footer: {
      tagline: '大文件公开链接传输，永不过期，无需账号，可选加密。永久房间 €5/月起。',
      product: '产品',
      legal: '法律',
      links: {
        features: '功能',
        security: '安全',
        pricing: '定价',
        download: '下载',
        privacy: '报告问题',
        terms: '服务条款',
        contact: '联系我们',
        privacyPolicy: '隐私政策',
        about: '关于我们',
      },
      copyright: '© 2026 Connectea. 保留所有权利。',
    },
    termsPage: {
      pageTitle: '服务条款 | Connectea',
      metaDescription: '阅读 Connectea 的服务条款。了解用户责任、端到端加密和内容政策。',
      heading: '服务条款',
      lastUpdated: '最后更新：2026 年 4 月',
      backHome: '返回首页',
      sections: [
        {
          title: '1. 条款接受',
          paragraphs: [
            '下载、安装或使用 Connectea（"服务"）即表示您同意受本服务条款约束。如果您不同意任何条款，请勿使用本服务。',
          ],
        },
        {
          title: '2. 用户内容责任',
          paragraphs: [
            '您对上传至 Connectea 房间的所有文件、数据和内容承担全部责任。Connectea 不主张对您内容的所有权，也不主动审查或监控上传至服务的文件。',
            '上传内容即表示您声明并保证：您拥有上传、分享和分发该内容的合法权利，该内容不违反任何适用法律法规，且不侵犯任何第三方的知识产权。',
            'Connectea 对用户上传的任何内容不承担责任。您有责任确保您对本服务的使用符合您所在地区的所有适用法律。',
          ],
        },
        {
          title: '3. 禁止内容',
          paragraphs: [
            '您不得使用 Connectea 上传、分享或分发以下任何内容：',
          ],
          items: [
            '依据任何适用法律属于非法的内容。',
            '侵犯版权、商标或其他知识产权的内容。',
            '儿童性虐待材料（CSAM）或任何对未成年人进行性剥削的内容。',
            '恶意软件、病毒或其他有害代码。',
            '助长、推广或煽动非法活动的内容。',
          ],
        },
        {
          title: '4. 内容监管与删除',
          paragraphs: [
            'Connectea 不主动审查或监控个别文件或特定用户的活动。我们尊重隐私并尽量减少数据收集。',
            '但是，Connectea 保留删除任何内容的权利——包括文件、房间或用户访问权——无论是经用户或第三方举报，还是我们有合理理由怀疑其违反本条款或适用法律。我们可能依据用户或第三方的举报、法律通知（如法院命令或执法机构请求）或对非法活动的合理怀疑采取行动。',
          ],
        },
        {
          title: '5. 端到端加密',
          paragraphs: [
            '当您使用密码加密文件时，加密过程完全在您的设备上完成，然后文件才会传输到我们的服务器。Connectea 使用 AES-256-GCM 加密和 PBKDF2-SHA-256 密钥派生。',
            '您的加密密码永远不会发送到 Connectea 的服务器；密钥在本地生成，永远不会离开您的设备。这意味着 Connectea 无法解密您的文件——这在技术上是不可能的。任何 Connectea 员工、管理员或系统都无法访问您加密文件的内容，即使面对法律要求也是如此，因为我们根本不具备这种技术能力。',
          ],
          warning: '如果您丢失了加密密码，包括 Connectea 在内的任何人都无法恢复加密文件的内容。',
        },
        {
          title: '6. 免责声明',
          paragraphs: [
            '本服务按"原样"提供，不附带任何形式的保证。Connectea 对用户上传的任何内容、任何数据丢失（包括密码丢失的加密文件）或因使用本服务而产生的任何间接、附带或后果性损害不承担责任。',
          ],
        },
        {
          title: '7. 条款变更',
          paragraphs: [
            'Connectea 保留随时修改本条款的权利。修改内容将发布在本页面。在变更发布后继续使用本服务即表示接受更新后的条款。',
          ],
        },
        {
          title: '8. 联系我们',
          paragraphs: [
            '如有法律咨询或举报违规行为，请联系 legal@connectea.net。一般问题请发送至 contact@connectea.net。',
          ],
        },
      ],
    },
    mobileGate: {
      eyebrow: '仅支持 Windows',
      title: 'Connectea 是 Windows 应用',
      subtitle: 'Connectea 运行于 Windows 10 / 11。输入你的邮箱，我们将发送下载链接，方便你之后在 PC 上安装。',
      emailPlaceholder: 'your@email.com',
      submitText: '发送下载链接',
      successText: '完成！请查收邮件，下载链接已发送。',
    },
    recoverPage: {
      pageTitle: '找回所有权密码 | Connectea',
      metaDescription: '为你的 Connectea 永久房间设置新的所有权密码。',
      heading: '设置新所有权密码',
      subtitle: '为你的永久房间设置新密码。请使用强密码——任何人拥有该密码都可以认领房间所有权。',
      emailLabel: '邮箱地址',
      emailPlaceholder: 'your@email.com',
      passwordLabel: '新所有权密码',
      passwordPlaceholder: '至少 8 个字符',
      submit: '更新密码',
      submitting: '更新中…',
      successTitle: '密码已更新！',
      successMessage: '你的所有权密码已更新。请打开 Connectea 应用并认领你的房间所有权。',
      errorInvalid: '此链接无效或已过期，请在应用中重新申请找回邮件。',
      errorGeneric: '出了点问题，请重试或重新申请找回邮件。',
      backHome: '返回首页',
      invalidLink: '链接无效或已过期',
      invalidLinkDesc: '此找回链接无效或已过期，请返回应用并重新申请。',
    },
    privacyPage: {
      pageTitle: '隐私政策 | Connectea',
      metaDescription: '了解 Connectea 收集哪些数据、如何使用以及如何行使你的权利。',
      heading: '隐私政策',
      lastUpdated: '最后更新：2026 年 5 月',
      backHome: '返回首页',
      sections: [
        {
          title: '1. 我们收集的信息',
          paragraphs: [
            'Connectea 只收集运营所需的最少信息。以下是根据你的使用方式可能收集的数据详情。',
          ],
          items: [
            '匿名使用分析：我们使用 Vercel Web Analytics 统计网站访问量，不收集个人身份信息。',
            'TikTok Pixel 和 Google Ads：我们使用这些像素衡量广告效果，按各自隐私政策收集浏览数据。',
            '邮箱（可选）：如果你在下载通知表单中填写邮箱（仅在移动端显示），我们只用于发送下载链接。',
            '我们不收集：你的文件内容、加密密码，以及上述以外的任何个人数据。',
          ],
        },
        {
          title: '2. 数据使用方式',
          paragraphs: [
            '分析数据用于改进产品和衡量广告效果。下载邮箱仅用于发送链接，发送后即删除。',
          ],
        },
        {
          title: '3. 数据保留',
          paragraphs: [
            'Connectea 会话令牌在房间关闭时过期。下载邮箱在链接发送后删除。分析数据按 Vercel、TikTok 和 Google 各自的政策保留。',
          ],
        },
        {
          title: '4. 你的权利',
          paragraphs: [
            '如需删除我们可能持有的个人数据，请发邮件至 legal@connectea.net。',
          ],
        },
        {
          title: '5. 联系方式',
          paragraphs: [
            '隐私相关问题：legal@connectea.net。',
          ],
        },
      ],
    },
    aboutPage: {
      pageTitle: '关于我们 | Connectea',
      metaDescription: '了解 Connectea 背后的团队——这款支持公开链接、可选端到端加密和一键 Minecraft 服务器的大文件传输工具。',
      heading: '关于我们',
      backHome: '返回首页',
      sections: [
        {
          title: 'Connectea 背后的团队',
          paragraphs: [
            'Connectea 是由西班牙独立开发者 Iván Navas 开发的项目。',
            '目标很简单：打造一款无摩擦的文件传输工具 — 无需强制注册，无人为大小限制，需要时支持端到端加密。',
          ],
        },
        {
          title: 'Connectea 存在的原因',
          paragraphs: [
            '大多数文件传输工具要求注册、链接会过期或限制文件大小。Connectea 就是为消除这些摩擦而生。',
            'Minecraft 插件是第一个应用场景——一个带同步服务器的永久房间。但产品的核心是文件分享：快速、加密，无需安装任何东西，直接在浏览器访问。',
          ],
        },
        {
          title: '联系方式',
          paragraphs: [
            '一般咨询：contact@connectea.net',
            '法律或隐私事务：legal@connectea.net',
            '问题报告：bug-report@connectea.net',
          ],
        },
      ],
    },
  },
};
