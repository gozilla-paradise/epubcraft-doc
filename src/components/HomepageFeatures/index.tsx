import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  titleId: string;
  titleDefault: string;
  descriptionId: string;
  descriptionDefault: string;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '✏️',
    titleId: 'homepage.features.dualModeEditor.title',
    titleDefault: 'Dual-Mode Editor',
    descriptionId: 'homepage.features.dualModeEditor.description',
    descriptionDefault:
      'Edit HTML and CSS with full syntax highlighting, auto-formatting, and keyboard shortcuts. Switch between code, preview, and split views.',
  },
  {
    icon: '👁️',
    titleId: 'homepage.features.realtimePreview.title',
    titleDefault: 'Real-time Preview',
    descriptionId: 'homepage.features.realtimePreview.description',
    descriptionDefault:
      'Live device mockup preview with bidirectional scroll sync. Click any element in the preview to jump to its source in the editor.',
  },
  {
    icon: '🤖',
    titleId: 'homepage.features.aiPowered.title',
    titleDefault: 'AI-Powered',
    descriptionId: 'homepage.features.aiPowered.description',
    descriptionDefault:
      'Gemini AI integration for generating chapter content and improving existing text. Provide instructions and let AI handle the writing.',
  },
  {
    icon: '📦',
    titleId: 'homepage.features.smartExport.title',
    titleDefault: 'Smart Export',
    descriptionId: 'homepage.features.smartExport.description',
    descriptionDefault:
      'Export to EPUB 2.0 or project ZIP. Includes Thai and Asian text optimization with automatic zero-width space insertion.',
  },
  {
    icon: '🔤',
    titleId: 'homepage.features.fontMedia.title',
    titleDefault: 'Font & Media',
    descriptionId: 'homepage.features.fontMedia.description',
    descriptionDefault:
      'Upload custom fonts (TTF, OTF, WOFF, WOFF2) and images. All assets are embedded directly in the EPUB output.',
  },
  {
    icon: '🔧',
    titleId: 'homepage.features.advancedTools.title',
    titleDefault: 'Advanced Tools',
    descriptionId: 'homepage.features.advancedTools.description',
    descriptionDefault:
      'Regex find and replace, chapter splitting by pattern, drag-and-drop chapter reordering, and saved regex patterns.',
  },
];

function Feature({icon, titleId, titleDefault, descriptionId, descriptionDefault}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>
        <Translate id={titleId}>{titleDefault}</Translate>
      </Heading>
      <p className={styles.featureDescription}>
        <Translate id={descriptionId}>{descriptionDefault}</Translate>
      </p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
