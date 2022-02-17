const getList = ({category, success}) => {
  const resources = faqResources[lang];

  const items = [];
  for (const c in resources) {
    if (category === 'ALL' || category === c) {
      resources[c].forEach((v) => {
        items.push(v);
      });
    }
  }

  success && success({
    count: {
      ALL: resources.OFFERINGS.length + resources.PRICING.length + resources.MEMBERSHIP.length + resources.TROUBLE.length + resources.OTHERS.length,
      OFFERINGS: resources.OFFERINGS.length,
      PRICING: resources.PRICING.length,
      MEMBERSHIP: resources.MEMBERSHIP.length,
      TROUBLE: resources.TROUBLE.length,
      OTHERS: resources.OTHERS.length
    },
    items
  });
};

const onClickTab = (t) => {
  // ex) panel-all
  const panelId = t.getAttribute('aria-controls');
  // ex) all
  const category = panelId.split('-')[1].toUpperCase();

  const success = ({ count, items }) => {
    if (count) {
      document.querySelectorAll('[count=ALL]').forEach((v) => v.innerText = count.ALL);
      document.querySelectorAll('[count=OFFERINGS]').forEach((v) => v.innerText = count.OFFERINGS);
      document.querySelectorAll('[count=PRICING]').forEach((v) => v.innerText = count.PRICING);
      document.querySelectorAll('[count=MEMBERSHIP]').forEach((v) => v.innerText = count.MEMBERSHIP);
      document.querySelectorAll('[count=TROUBLE]').forEach((v) => v.innerText = count.TROUBLE);
      document.querySelectorAll('[count=OTHERS]').forEach((v) => v.innerText = count.OTHERS);
    }

    const getItem = ({ category, section, title, contents }) => {
      const $li = document.createElement('li');
      const toValue = (category) => {
        return category.substr(0, 1) + category.substr(1).toLowerCase();
      };
      $li.innerHTML = `
        <a href="javascript:;" class="list-row" data-type="list-row">
          <div class="accordion-data">
            <span class="type">${section || toValue(category)}</span>
            <p class="title-area">
              <span class="title">${title}</span>
            </p>
          </div>
        </a>
        <div class="content">
          <div class="inner" style="white-space: pre-wrap;">${contents}</div>
        </div>
      `;
      return $li;
    };

    if (items && items.length > 0) {
      document.querySelector(`#${panelId} ul`).innerHTML = '';
      items.forEach((v) => {
        document.querySelector(`#${panelId} ul`).append(getItem(v));
      });
    } else {
      document.querySelector(`#${panelId} ul`).innerHTML = `
        <div class="empty font-body4">
          <span class="icon"></span>
          <p class="text">${$.i18n.t('message.message_1128')}</p>
        </div>
      `;
    }
  };

  getList({category, success});
};


(() => {
  // init
  document.querySelector('button[aria-controls=panel-all]').click();
})();