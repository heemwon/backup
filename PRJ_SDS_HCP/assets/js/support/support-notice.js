const getList = ({category, success}) => {
  const resources = noticeResources[lang];

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
      ALL: resources.ANNOUNCEMENT.length + resources.MAINTENANCE.length,
      ANNOUNCEMENT: resources.ANNOUNCEMENT.length,
      MAINTENANCE: resources.MAINTENANCE.length,
    },
    items: items.sort((a, b) => {
      if (a.createdDt > b.createdDt) {
        return -1;
      } else if (a.createdDt < b.createdDt) {
        return 1;
      } else {
        return a.category > b.category ? -1 : 1;
      }
    })
  })
};

const onClickTab = (t) => {
  // ex) panel-all
  const panelId = t.getAttribute('aria-controls');
  // ex) all
  const category = panelId.split('-')[1].toUpperCase();

  const success = ({ count, items }) => {
    if (count) {
      document.querySelectorAll('[count=ALL]').forEach((v) => v.innerText = count.ALL);
      document.querySelectorAll('[count=ANNOUNCEMENT]').forEach((v) => v.innerText = count.ANNOUNCEMENT);
      document.querySelectorAll('[count=MAINTENANCE]').forEach((v) => v.innerText = count.MAINTENANCE);
    }

    const getItem = ({ category, section, title, contents, createdDt }) => {
      const $li = document.createElement('li');
      const toValue = (category) => {
        return category.substr(0, 1) + category.substr(1).toLowerCase();
      };

      let badge = false;
      if (createdDt) {
        const getJustDate = (date) => {
          return new Date(date.toDateString());
        };
        badge = (getJustDate(new Date('2021-10-06')).getTime() - getJustDate(new Date(createdDt)).getTime()) / (1000 * 3600 * 24) < 4
      }

      const replacedContents = contents
        .replaceAll('${PORTAL_LINK}', `<a href="${window.location.origin}/" target="_blank">${window.location.origin}/</a>`)
        .replaceAll('${CONSOLE_LINK}', `<a href="${window.location.origin}/console/" target="_blank">${window.location.origin}/console/</a>`);

      $li.innerHTML = `
        <a href="javascript:;" class="list-row" data-type="list-row">
          <div class="accordion-data">
            <span class="type">${section || toValue(category)}</span>
            <p class="title-area">
              <span class="title new">
                <span>${title}</span>
                ${ badge ? '<span class="badge-new2">N</span>' : '' }
              </span>
            </p>
          </div>
          <div class="accordion-info">
            <span class="date">${createdDt}</span>
          </div>
        </a>
        <div class="content">
          <div class="inner">${replacedContents}</div>
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