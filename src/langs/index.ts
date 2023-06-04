import i18n from "@/config/i18n";
import type { I18n } from "vue-i18n";
import type { MessageType } from "./interface";

function getLangs() {
  const langs = import.meta.glob("./modules/*.json", { eager: true }) as MetaGlobTypeWithDefault<{ default: Record<string, unknown> }>;
  const messages: MessageType = {};
  for (let [u, de] of Object.entries(langs)) {
    const key = u.slice(10, -5);
    messages[key] = de.default;
  }
  return messages;
}

async function initLanguage(
  i18n: I18n<{}, {}, {}, string, false>,
  messages: MessageType
) {
  for (let [key, value] of Object.entries(messages)) {
    i18n.global.setLocaleMessage(key, value);
  }
}

initLanguage(i18n, getLangs());
