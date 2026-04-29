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
  download: { title: string; subtitle: string; cta: string; note: string; smartscreenNote: string };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    links: { features: string; security: string; pricing: string; download: string; privacy: string; terms: string; contact: string };
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
}

export const translations: Record<Lang, Translation> = {
  es: {
    meta: {
      title: 'Connectea — Comparte archivos sin cuenta | Plugin Minecraft gratis',
      description: 'Comparte archivos con amigos sin cuenta. Cifrado AES-256, salas por código, hasta 50 GB. Plugin de Minecraft en un clic. Gratis para Windows 10/11.',
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
      headline: 'Comparte archivos con amigos. Levanta tu servidor Minecraft. Sin cuenta, sin complicaciones.',
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
      smartscreenNote: 'Windows puede mostrar un aviso de seguridad al abrir el instalador. Esto es completamente normal en aplicaciones nuevas de desarrolladores independientes — Connectea es seguro. Haz clic en «Más información» → «Ejecutar de todas formas» para continuar.',
    },
    footer: {
      tagline: 'Comparte archivos con amigos en segundos, sin cuenta. Plugin de servidor Minecraft incluido.',
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
      },
      copyright: '© 2026 Connectea. Todos los derechos reservados.',
    },
    termsPage: {
      pageTitle: 'Términos y condiciones | Connectea',
      metaDescription: 'Consulta los términos de uso de Connectea: responsabilidad del usuario, política de contenidos y cifrado de extremo a extremo AES-256.',
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
    recoverPage: {
      pageTitle: 'Recuperar contraseña de propiedad | Connectea',
      metaDescription: 'Recupera el acceso a tu sala permanente de Connectea. Establece una nueva contraseña de propiedad y reclámala desde la app.',
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
  },

  en: {
    meta: {
      title: 'Connectea — Free File Sharing, No Account | Minecraft Server',
      description: 'Share files with friends, no account needed. AES-256 encrypted, code-based rooms, up to 50 GB. One-click Minecraft server plugin. Free for Windows 10/11.',
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
      headline: 'Share files with friends. Run your Minecraft server. No account, no friction.',
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
      smartscreenNote: 'Windows may show a security warning when opening the installer. This is completely normal for new apps from independent developers — Connectea is safe. Click «More info» → «Run anyway» to continue.',
    },
    footer: {
      tagline: 'Share files with friends in seconds, no account needed. Minecraft server plugin included.',
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
      },
      copyright: '© 2026 Connectea. All rights reserved.',
    },
    termsPage: {
      pageTitle: 'Terms & Conditions | Connectea',
      metaDescription: 'Read Connectea\'s Terms & Conditions: user responsibilities, end-to-end AES-256 encryption, and prohibited content policy.',
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
    recoverPage: {
      pageTitle: 'Recover Ownership Password | Connectea',
      metaDescription: 'Recover access to your Connectea permanent room. Set a new ownership password and reclaim your room from the app.',
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
  },

  zh: {
    meta: {
      title: 'Connectea — 无需账号免费分享文件 | 一键 Minecraft 服务器',
      description: '与朋友分享文件，无需注册账号。端到端 AES-256 加密，每个房间最大 50 GB。一键启动 Minecraft 服务器，存档自动同步。免费，支持 Windows 10/11。',
      keywords: '无账号文件分享, 免费文件分享, 加密文件传输, 与朋友分享文件, Minecraft服务器插件, 一键Minecraft服务器, 我的世界服务器插件, 一键我的世界服务器, 即时文件传输, Windows文件分享, 无需注册文件分享',
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
      headline: '与朋友分享文件，一键Minecraft服务器，零门槛',
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
      smartscreenNote: '打开安装包时 Windows 可能会显示安全提示。这对独立开发者发布的新应用来说完全正常——Connectea 安全可靠，请放心使用。点击「更多信息」→「仍然运行」即可继续安装。',
    },
    footer: {
      tagline: '与朋友即时分享文件，无需账号。内置 Minecraft 服务器插件。',
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
      },
      copyright: '© 2026 Connectea. 保留所有权利。',
    },
    termsPage: {
      pageTitle: '服务条款 | Connectea',
      metaDescription: '阅读 Connectea 服务条款：用户内容责任、端到端 AES-256 加密机制以及禁止内容的相关规定。',
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
    recoverPage: {
      pageTitle: '找回所有权密码 | Connectea',
      metaDescription: '找回你的 Connectea 永久房间访问权限。设置新的所有权密码后，在应用中重新认领你的房间。',
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
  },
};
