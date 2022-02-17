// global variable
let lang;
try {
  lang = (window.localStorage.getItem('language') || navigator.language || navigator.userLanguage).substring(0, 2);
} catch (err) {
  lang = 'ko';
}

String.prototype.replaceAll =
  String.prototype.replaceAll ||
  function (m, r) {
    return this.replace(new RegExp(m.replace('$', '\\$'), 'g'), r);
  };

String.prototype.format =
  String.prototype.format ||
  function () {
    var content = this;
    for (var i = 0; i < arguments.length; i++) {
      var replacement = '{' + i + '}';
      content = content.replace(replacement, arguments[i]);
    }
    return content;
  };

///////////////////////////////////////////
// 공통 header, footer, link 적용
///////////////////////////////////////////

(() => {
  /////////////////////
  // 공통 header 적용
  /////////////////////
  const $headerTemplate = document.querySelector('#header-template');
  if ($headerTemplate) {
    $headerTemplate.innerHTML = `
      <header>
        <div class="dim"></div>
        <nav>
          <h1>
            <a service-portal internal><span class="hidden">SAMSUNG SDS Cloud Platform</span></a>
          </h1>
          <ul class="main-menu">
            <li>
              <a href="javascript:;" id="intro" data-i18n="category.category_1"></a>
              <div class="sub-menu">
                <div class="page-content">
                  <div class="left-menu">
                    <dl>
                      <dt class="font-heading2" data-i18n="label.label_1"></dt>
                      <dd class="i18n-br" data-i18n="label.label_4_1"></dd>
                    </dl>
                    <a href="intro/services.html" class="btn-border large" data-i18n="button.button_1"></a>
                  </div>
                  <div class="right-menu">
                    <ul>
                      <li>
                        <a href="intro/architecture.html">
                          <strong data-i18n="category.category_2"></strong>
                          <span data-i18n="message.message_2"></span>
                        </a>
                      </li>
                      <li>
                        <a href="intro/case.html">
                          <strong data-i18n="label.label_25"></strong>
                          <span data-i18n="message.message_3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="intro/datacenter.html">
                          <strong data-i18n="category.category_4"></strong>
                          <span data-i18n="message.message_4"></span>
                      </ul>
                  </div>
                </div>
                <a href="javascript:;" class="btn-ico close"><span class="hidden">소개 서브메뉴 닫기</span></a>
              </div>
            </li>
            <li>
              <a href="javascript:;" id="product" data-i18n="category.category_5"></a>
              <div class="sub-menu product">
                <div class="page-content">
                  <div class="left-menu">
                    <ul class="list-type2">
                      <li>
                        <a href="javascript:;" class="active">Compute</a>
                      </li>
                      <li>
                        <a href="javascript:;">Storage</a>
                      </li>
                      <li>
                        <a href="javascript:;">Database</a>
                      </li>
                      <li>
                        <a href="javascript:;">Container</a>
                      </li>
                      <li>
                        <a href="javascript:;">Networking</a>
                      </li>
                      <li>
                        <a href="javascript:;">Security</a>
                      </li>
                      <li>
                        <a href="javascript:;">Application Service</a>
                      </li>
                      <li>
                        <a href="javascript:;">Analytics</a>
                      </li>
                      <li>
                        <a href="javascript:;">AI Service</a>
                      </li>
                      <li>
                        <a href="javascript:;">Management</a>
                      </li>
                    </ul>
                    <a href="	./product.html" class="btn-text arrow-b" data-i18n="button.button_2"></a>
                  </div>
                  <div class="right-menu">
                    <div class="product-panel">
                      <a href="product/compute.html" class="font-heading3">Compute</a>
                      <ul>
                        <li>
                          <a href="product/compute/virtualServer.html">
                            <strong>Virtual Server</strong>
                            <span data-i18n="message.message_5"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/compute/vmAutoscaling.html">
                            <strong>VM Auto-Scaling </strong>
                            <span data-i18n="message.message_6"></span>
                          </a>
                        </li>
                        <!-- START : 수정 : 211005 Bare Metal Server 추가 -->
                        <li>
                          <a href="product/compute/baremetal.html">
                            <strong data-i18n="label.label_106"></strong>
                            <span data-i18n="message.message_7"></span>
                          </a>
                        </li>
                        <!-- END : 수정 : 211005 Bare Metal Server 추가 -->
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/storage.html" class="font-heading3">Storage</a>
                      <ul>
                        <li>
                          <a href="product/storage/blockStorage.html">
                            <strong>Block Storage</strong>
                            <span data-i18n="message.message_8"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/storage/fileStorage.html">
                            <strong>File Storage</strong>
                            <span data-i18n="message.message_9"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/storage/objStorage.html">
                            <strong>Object Storage</strong>
                            <span data-i18n="message.message_10"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/storage/backup.html">
                            <strong>Backup</strong>
                            <span data-i18n="message.message_11"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/database.html" class="font-heading3">Database</a>
                      <ul>
                        <li>
                          <a href="product/database/dbService.html">
                            <strong>DB Service</strong>
                            <span data-i18n="message.message_12"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/container.html" class="font-heading3">Container</a>
                      <ul>
                        <li>
                          <a href="product/container/k8sEngine.html">
                            <strong>Kubernetes Engine</strong>
                            <span data-i18n="message.message_13"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/container/k8sApps.html">
                            <strong>Kubernetes Apps</strong>
                            <span data-i18n="message.message_14"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/network.html" class="font-heading3">Networking</a>
                      <ul>
                        <li>
                          <a href="product/network/vpc.html">
                            <strong>VPC</strong>
                            <span data-i18n="message.message_15"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/network/securityGroup.html">
                            <strong>Security Group</strong>
                            <span data-i18n="message.message_16"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/network/loadBalancer.html">
                            <strong>Load Balancer</strong>
                            <span data-i18n="message.message_17"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/network/dns.html">
                            <strong>DNS</strong>
                            <span data-i18n="message.message_18"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/network/gslb.html">
                            <strong>GSLB</strong>
                            <span data-i18n="message.message_19"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/network/vpn.html">
                            <strong>VPN</strong>
                            <span data-i18n="message.message_20"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/security.html" class="font-heading3">Security</a>
                      <ul>
                        <li>
                          <a href="product/security/ddos.html">
                            <strong data-i18n="label.label_115"></strong>
                            <span data-i18n="message.message_21"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/security/ids.html">
                            <strong>IDS</strong>
                            <span data-i18n="message.message_22"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/security/waf.html">
                            <strong>WAF</strong>
                            <span data-i18n="message.message_23"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/security/webVulnerability.html">
                            <strong data-i18n="label.label_380"></strong>
                            <span data-i18n="message.message_24"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/security/certificateMgmt.html">
                            <strong data-i18n="label.label_485"></strong>
                            <span data-i18n="message.message_25"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/appService.html" class="font-heading3">Application Service</a>
                      <ul>
                        <li>
                          <a href="product/appService/apiGateway.html">
                            <strong>API Gateway</strong>
                            <span data-i18n="message.message_26"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/appService/alarm.html">
                            <strong>Mail/SMS/Push</strong>
                            <span data-i18n="message.message_27"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/analytics.html" class="font-heading3">Analytics</a>
                      <ul>
                        <li>
                          <a href="product/analytics/kafka.html">
                            <strong>Kafka</strong>
                            <span data-i18n="message.message_28"></span>
                          </a>
                        </li>
                        <!-- START : 수정 : 211005 Elasticsearch 추가 -->
                        <li>
                          <a href="product/analytics/elasticsearch.html">
                            <strong>Elasticsearch</strong>
                            <span data-i18n="message.message_1130"></span>
                          </a>
                        </li>
                        <!-- END : 수정 : 211005 Elasticsearch 추가 -->
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/aiService.html" class="font-heading3">AI Service</a>
                      <ul>
                        <li>
                          <a href="product/aiService/kubeflow.html">
                            <strong>Kubeflow</strong>
                            <span data-i18n="message.message_29"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="product-panel">
                      <a href="product/management.html" class="font-heading3">Management</a>
                      <ul>
                        <li>
                          <a href="product/management/logNaudit.html">
                            <strong>Logging & Audit</strong>
                            <span data-i18n="message.message_30"></span>
                          </a>
                        </li>
                        <li>
                          <a href="product/management/monitoring.html">
                            <strong>Cloud Monitoring</strong>
                            <span data-i18n="message.message_31"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a href="javascript:;" class="btn-ico close"><span class="hidden">상품 서브메뉴 닫기</span></a>
              </div>
            </li>
            <li>
              <a href="javascript:;" id="pricing" data-i18n="category.category_6"></a>
              <div class="sub-menu">
                <div class="page-content">
                  <div class="left-menu">
                    <dl>
                      <dt class="font-heading2" data-i18n="category.category_7"></dt>
                      <dd data-i18n="message.message_33"></dd>
                    </dl>
                    <a href="pricing.html" class="btn-border large" data-i18n="button.button_1"></a>
                  </div>
                  <div class="right-menu">
                    <ul>
                      <li>
                        <a href="pricing/calculator.html">
                          <strong data-i18n="category.category_8"></strong>
                          <span data-i18n="message.message_34"></span>
                        </a>
                      </li>
                      <!-- START : 수정 : 210802 무료체험 추가 -->
                      <li>
                        <a href="freetrials.html">
                          <strong data-i18n="button.button_12"></strong>
                          <span data-i18n="message.message_32"></span>
                        </a>
                      </li>
                      <!-- END : 수정 : 210802 무료체험 추가 -->
                    </ul>
                  </div>
                </div>
                <a href="javascript:;" class="btn-ico close"><span class="hidden">요금 서브메뉴 닫기</span></a>
              </div>
            </li>
            <li>
              <a href="javascript:;" id="support" data-i18n="category.category_13"></a>
              <div class="sub-menu">
                <div class="page-content">
                  <div class="left-menu">
                    <dl>
                      <dt class="font-heading2" data-i18n="label.label_3"></dt>
                      <dd data-i18n="message.message_35"></dd>
                    </dl>
                    <a href="support/question.html" class="btn-border large" data-i18n="button.button_1"></a>
                  </div>
                  <div class="right-menu">
                    <ul>
                      <li>
                        <a href="support/notice.html">
                          <strong data-i18n="category.category_9"></strong>
                          <span data-i18n="message.message_36"></span>
                        </a>
                      </li>
                      <li>
                        <a href="support/faq.html">
                          <strong>FAQ</strong>
                          <span data-i18n="message.message_77"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="javascript:;" class="btn-ico close"><span class="hidden">고객지원 서브메뉴 닫기</span></a>
              </div>
            </li>
            <!-- START : 파트너 페이지 제외시 삭제 해 주세요 -->
            <li>
              <a href="javascript:;" id="partner">파트너</a>
              <div class="sub-menu">
                <div class="page-content">
                  <div class="left-menu">
                    <dl>
                      <dt class="font-heading2">파트너</dt>
                      <dd>성공적인 미래, 네이버 클라우드 플랫폼과 함께 하세요</dd>
                    </dl>
                    <a href="partner/program.html" class="btn-border large">더 알아보기</a>
                  </div>
                  <div class="right-menu">
                    <ul>
                      <li>
                        <a href="partner/introduce.html">
                          <strong>파트너 소개</strong>
                          <span>비즈니스의 성장을 지원하고 동방 성장을 이끌어내는 파트너를 확인해보세요.</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.ncloud.com" target="_blank">
                          <strong>파트너 포탈<i class="portal large"></i></strong>
                          <span>비즈니스의 성장을 지원하고 동방 성장을 이끌어내는 파트너를 확인해보세요.</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="javascript:;" class="btn-ico close"><span class="hidden">고객지원 서브메뉴 닫기</span></a>
              </div>
            </li>
            <!-- END : 파트너 페이지 제외시 삭제 해 주세요 -->
          </ul>
          <ul class="etc-menu">
          <li>
              <a href="javascript:;" class="btn-ico search"><span class="hidden">검색하기</span></a>
              <div class="total-search-wrap">
                <div class="total-search" data-type="inputSearch">
                  <input type="search" placeholder="검색어를 입력하세요" maxlength="255" autocomplete="off" spellcheck="false" />
                  <button type="button" class="btn-delete">
                    <span class="hidden">입력 삭제 버튼</span>
                  </button>
                  <button type="button" class="btn-search">
                    <span class="hidden">search 버튼</span>
                  </button>
                </div>
                <div class="search-list">
                  <div class="search-box">
                    <strong>자동완성</strong>
                    <ul class="list-type2 auto">
                      <li>
                        <!-- 주석: 자동완성 문구는 <strong class='mask'></strong> 태그에 감싸주세요 -->
                        <a href="javascript:;"><strong class="mask">clou</strong>d</a>
                      </li>
                      <li>
                        <a href="javascript:;"><strong class="mask">clou</strong>dnativecon</a>
                      </li>
                      <li>
                        <a href="javascript:;"><strong class="mask">clou</strong>d native computing</a>
                      </li>
                    </ul>
                  </div>
                  <!-- 주석: 최근검색어가 없을 경우 hidden 듀얼클래스를 추가해주세요. -->
                  <div class="search-box">
                    <strong>최근검색</strong>
                    <ul class="list-type2 recent">
                      <li>
                        <a href="javascript:;">storage</a>
                      </li>
                      <li>
                        <a href="javascript:;">데이터베이스 소개</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="button" class="btn-text close">취소</button>
              </div>
            </li>
            <li>
              <div class="select-box1 lang">
                <select name="selectLanguage">
                  <option value="ko_KR">한국어</option>
                  <option value="en_US">English</option>
                </select>
              </div>
            </li>
            <li><a href="support/question.html" data-i18n="label.label_3"></a></li>
            <!-- START : 수정 : 210803 무료체험 삭제 -->
            <!-- END : 수정 : 210803 무료체험 삭제 -->
            <li>
              <a scp-console class="btn-console"><span>Console</span></a>
            </li>
            <li>
              <a href="javascript:;" role="button" class="btn-ico ham"><span class="hidden">메뉴열기</span></a>
            </li>
          </ul>
          <!-- mobile menu -->
          <div class="mnb">
            <div class="mnb-inner">
              <a href="javascript:;" class="btn-ico close"><span class="hidden">모바일 메뉴 닫기</span></a>
              <ul class="mmain-menu">
                <li>
                  <a href="javascript:;" data-i18n="category.category_1"></a>
                  <div class="msub-menu">
                    <div class="msub-menu-top">
                      <a href="javascript:;" class="btn-text arrow" data-i18n="button.button_60"></a>
                    </div>
                    <div class="msub-menu-cont">
                      <strong class="font-heading4" data-i18n="category.category_1"></strong>
                      <ul>
                        <li>
                          <a href="intro/services.html" data-i18n="label.label_1"></a>
                        </li>
                        <li>
                          <a href="intro/architecture.html" data-i18n="label.label_63"></a>
                        </li>
                        <li>
                          <a href="intro/case.html" data-i18n="category.category_3"></a>
                        </li>
                        <li>
                          <a href="intro/datacenter.html" data-i18n="category.category_4"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:;" data-i18n="category.category_5"></a>
                  <div class="msub-menu product">
                    <div class="msub-menu-top">
                      <a href="javascript:;" class="btn-text arrow" data-i18n="button.button_60"></a>
                    </div>
                    <div class="msub-menu-cont" data-scroll-lock-scrollable>
                      <strong class="font-heading4" data-i18n="category.category_28"></strong>
                      <ul>
                        <li>
                          <a href="product/compute.html">Compute</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/compute/virtualServer.html">Virtual Server</a>
                            </li>
                            <li>
                              <a href="product/compute/vmAutoscaling.html">VM Auto-Scaling</a>
                            </li>
                            <!-- START : 수정 : 211005 Bare Metal Server 추가 -->
                            <li>
                              <a href="product/compute/baremetal.html" data-i18n="label.label_106"></a>
                            </li>
                            <!-- END : 수정 : 211005 Bare Metal Server 추가 -->
                          </ul>
                        </li>
                        <li>
                          <a href="product/storage.html">Storage</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/storage/blockStorage.html">Block Storage</a>
                            </li>
                            <li>
                              <a href="product/storage/fileStorage.html">File Storage</a>
                            </li>
                            <li>
                              <a href="product/storage/objStorage.html">Object Storage</a>
                            </li>
                            <li>
                              <a href="product/storage/backup.html">Backup</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/database.html">Database</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/database/dbService.html">DB Service</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/container.html">Container</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/container/k8sEngine.html">Kubernetes Engine</a>
                            </li>
                            <li>
                              <a href="product/container/k8sApps.html">Kubernetes Apps</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/network.html">Networking</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/network/vpc.html">VPC</a>
                            </li>
                            <li>
                              <a href="product/network/securityGroup.html">Security Group</a>
                            </li>
                            <li>
                              <a href="product/network/loadBalancer.html">Load Balancer</a>
                            </li>
                            <li>
                              <a href="product/network/dns.html">DNS</a>
                            </li>
                            <li>
                              <a href="product/network/gslb.html">GSLB</a>
                            </li>
                            <li>
                              <a href="product/network/vpn.html">VPN</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/security.html">Security</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/security/ddos.html" data-i18n="label.label_115"></a>
                            </li>
                            <li>
                              <a href="product/security/ids.html">IDS</a>
                            </li>
                            <li>
                              <a href="product/security/waf.html">WAF</a>
                            </li>
                            <li>
                              <a href="product/security/webVulnerability.html" data-i18n="label.label_380"></a>
                            </li>
                            <li>
                              <a href="product/security/certificateMgmt.html" data-i18n="label.label_485"></a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/appService.html">Application Service</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/appService/apiGateway.html">API Gateway</a>
                            </li>
                            <li>
                              <a href="product/appService/alarm.html">Mail/SMS/Push</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/analytics.html">Analytics</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/analytics/kafka.html">Kafka</a>
                            </li>
                            <!-- START : 수정 : 211005 Elasticsearch 추가 -->
                            <li>
                              <a href="product/analytics/elasticsearch.html">Elasticsearch</a>
                            </li>
                            <!-- END : 수정 : 211005 Elasticsearch 추가 -->
                          </ul>
                        </li>
                        <li>
                          <a href="product/aiService.html">AI Service</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/aiService/kubeflow.html">Kubeflow</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product/management.html">Management</a>
                          <ul class="list-type2">
                            <li>
                              <a href="product/management/logNaudit.html">Logging & Audit</a>
                            </li>
                            <li>
                              <a href="product/management/logNaudit.html">Cloud Monitoring</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="msub-menu-bottom">
                      <a href="product.html" class="btn-sub large" data-i18n="button.button_2"></a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:;" data-i18n="category.category_6"></a>
                  <div class="msub-menu">
                    <div class="msub-menu-top">
                      <a href="javascript:;" class="btn-text arrow" data-i18n="button.button_60"></a>
                    </div>
                    <div class="msub-menu-cont">
                      <strong class="font-heading4" data-i18n="category.category_6"></strong>
                      <ul>
                        <li>
                          <a href="pricing.html" data-i18n="category.category_7"></a>
                        </li>
                        <li>
                          <a href="pricing/calculator.html" data-i18n="category.category_8"></a>
                        </li>
                        <!-- START : 수정 : 211005 무료체험 추가 -->
                        <li>
                          <a href="freetrials.html" data-i18n="button.button_12"></a>
                        </li>
                        <!-- END : 수정 : 211005 무료체험 추가 -->
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:;" data-i18n="category.category_13"></a>
                  <div class="msub-menu">
                    <div class="msub-menu-top">
                      <a href="javascript:;" class="btn-text arrow" data-i18n="button.button_60"></a>
                    </div>
                    <div class="msub-menu-cont">
                      <strong class="font-heading4" data-i18n="category.category_13"></strong>
                      <ul>
                        <li>
                          <a href="support/notice.html" data-i18n="category.category_9"></a>
                        </li>
                        <li>
                          <a href="support/faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="support/question.html" data-i18n="label.label_3"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- START : 파트너 페이지 제외시 삭제 해 주세요 -->
                <li>
                  <a href="javascript:;">파트너</a>
                  <div class="msub-menu">
                    <div class="msub-menu-top">
                      <a href="javascript:;" class="btn-text arrow" data-i18n="button.button_60"></a>
                    </div>
                    <div class="msub-menu-cont">
                      <strong class="font-heading4">파트너</strong>
                      <ul>
                        <li>
                          <a href="partner/program.html">파트너 프로그램</a>
                        </li>
                        <li>
                          <a href="partner/introduce.html">파트너 소개</a>
                        </li>
                        <li>
                          <a href="https://www.ncloud.com" target="_blank">파트너 포탈<i class="portal"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- END : 파트너 페이지 제외시 삭제 해 주세요 -->
              </ul>
              <ul class="metc-menu">
                <li>
                  <div class="select-box1 lang">
                    <select name="selectLanguage">
                      <option value="ko_KR">한국어</option>
                      <option value="en_US">English</option>
                    </select>
                  </div>
                </li>
                <li>
                  <a href="support/question.html" data-i18n="label.label_3"></a>
                </li>
                <!-- START : 수정 : 211005 무료체험 삭제 -->
                <!-- END : 수정 : 211005 무료체험 삭제 -->
              </ul>
            </div>
          </div>
        </nav>
        <div class="page-menu" id="intro_sub">
          <div class="page-menu-inner">
            <ul>
              <li><a href="intro/services.html" id="services" data-i18n="label.label_1"></a></li>
              <li><a href="intro/architecture.html" id="architecture" data-i18n="label.label_63"></a></li>
              <li><a href="intro/case.html" id="case" data-i18n="label.label_25"></a></li>
              <li><a href="intro/datacenter.html" id="datacenter" data-i18n="label.label_55"></a></li>
            </ul>
          </div>
        </div>
        <div class="page-menu" id="product_sub">
          <div class="page-menu-inner">
            <ul>
              <li>
                <a href="product/compute.html" id="compute">Compute</a>
              </li>
              <li>
                <a href="product/storage.html" id="storage">Storage</a>
              </li>
              <li>
                <a href="product/database.html" id="database">Database</a>
              </li>
              <li>
                <a href="product/container.html" id="container">Container</a>
              </li>
              <li>
                <a href="product/network.html" id="network">Networking</a>
              </li>
              <li>
                <a href="product/security.html" id="security">Security</a>
              </li>
              <li>
                <a href="product/appService.html" id="appService">Application Service</a>
              </li>
              <li>
                <a href="product/analytics.html" id="analytics">Analytics</a>
              </li>
              <li>
                <a href="product/aiService.html" id="aiService">AI Service</a>
              </li>
              <li>
                <a href="product/management.html" id="management">Management</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="page-menu" id="pricing_sub">
          <div class="page-menu-inner">
            <ul>
              <li>
                <a href="pricing.html" id="pricing_option" data-i18n="category.category_7"></a>
              </li>
              <li>
                <a href="pricing/calculator.html" id="calculator" data-i18n="category.category_8"></a>
              </li>
              <!-- START : 수정 : 210802 무료체험 추가 -->
              <li>
                <a href="freetrials.html" id="freetrials" data-i18n="button.button_12"></a>
              </li>
              <!-- END : 수정 : 210802 무료체험 추가 -->
            </ul>
          </div>
        </div>
        <div class="page-menu" id="support_sub">
          <div class="page-menu-inner">
            <ul>
              <li>
                <a href="support/notice.html" id="notice" data-i18n="category.category_9"></a>
              </li>
              <li>
                <a href="support/faq.html" id="faq">FAQ</a>
              </li>
              <li>
                <a href="support/question.html" id="question" data-i18n="label.label_3"></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- START : 파트너 페이지 제외시 삭제 해 주세요 -->
        <div class="page-menu" id="partner_sub">
          <div class="page-menu-inner">
            <ul>
              <li>
                <a href="partner/program.html" id="program">파트너 프로그램</a>
              </li>
              <li>
                <a href="partner/introduce.html" id="introduce">파트너 소개</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- END : 파트너 페이지 제외시 삭제 해 주세요 -->
        <div class="page-menu" id="product_detail_sub">
          <div class="page-dropdown">
            <button type="button" id="product_dropdown_snb" class="btn-dropdown" data-toggle>Compute</button>
            <ul class="dropdown-list">
              <li>
                <a href="product/compute.html">Compute</a>
              </li>
              <li>
                <a href="product/storage.html">Storage</a>
              </li>
              <li>
                <a href="product/database.html">Database</a>
              </li>
              <li>
                <a href="product/container.html">Container</a>
              </li>
              <li>
                <a href="product/network.html">Networking</a>
              </li>
              <li>
                <a href="product/security.html">Security</a>
              </li>
              <li>
                <a href="product/appService.html">Application Service</a>
              </li>
              <li>
                <a href="product/analytics.html">Analytics</a>
              </li>
              <li>
                <a href="product/aiService.html">AI Service</a>
              </li>
              <li>
                <a href="product/management.html">Management</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="compute_detail_sub">
            <ul>
              <li>
                <a href="product/compute/virtualServer.html" id="virtualServer">Virtual Server</a>
              </li>
              <li>
                <a href="product/compute/vmAutoscaling.html" id="vmAutoscaling">VM Auto-Scaling</a>
              </li>
              <!-- START : 추가 : 211005 Bare Metal Server 추가 -->
              <li>
                <a href="product/compute/baremetal.html" id="baremetal" data-i18n="label.label_106"></a>
              </li>
              <!-- END : 추가 : 211005 Bare Metal Server 추가 -->
            </ul>
          </div>
          <div class="page-menu-inner" id="storage_detail_sub">
            <ul>
              <li>
                <a href="product/storage/blockStorage.html" id="blockStorage">Block Storage</a>
              </li>
              <li>
                <a href="product/storage/fileStorage.html" id="fileStorage">File Storage</a>
              </li>
              <li>
                <a href="product/storage/objStorage.html" id="objStorage">Object Storage</a>
              </li>
              <li>
                <a href="product/storage/backup.html" id="backup">Backup</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="database_detail_sub">
            <ul>
              <li>
                <a href="product/database/dbService.html" id="dbService">DB Service</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="container_detail_sub">
            <ul>
              <li>
                <a href="product/container/k8sEngine.html" id="k8sEngine">Kubernetes Engine</a>
              </li>
              <li>
                <a href="product/container/k8sApps.html" id="k8sApps">Kubernetes Apps</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="network_detail_sub">
            <ul>
              <li>
                <a href="product/network/vpc.html" id="vpc">VPC</a>
              </li>
              <li>
                <a href="product/network/securityGroup.html" id="securityGroup">Security Group</a>
              </li>
              <li>
                <a href="product/network/loadBalancer.html" id="loadBalancer">Load Balancer</a>
              </li>
              <li>
                <a href="product/network/dns.html" id="dns">DNS</a>
              </li>
              <li>
                <a href="product/network/gslb.html" id="gslb">GSLB</a>
              </li>
              <li>
                <a href="product/network/vpn.html" id="vpn">VPN</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="security_detail_sub">
            <ul>
              <li>
                <a href="product/security/ddos.html" id="ddos" data-i18n="label.label_115"></a>
              </li>
              <li>
                <a href="product/security/ids.html" id="ids">IDS</a>
              </li>
              <li>
                <a href="product/security/waf.html" id="waf">WAF</a>
              </li>
              <li>
                <a href="product/security/webVulnerability.html" id="webVulnerability" data-i18n="label.label_380"></a>
              </li>
              <li>
                <a href="product/security/certificateMgmt.html" id="certificateMgmt" data-i18n="label.label_485"></a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="appService_detail_sub">
            <ul>
              <li>
                <a href="product/appService/apiGateway.html" id="apiGateway">API Gateway</a>
              </li>
              <li>
                <a href="product/appService/alarm.html" id="alarm">Mail/SMS/Push</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="analytics_detail_sub">
            <ul>
              <li>
                <a href="product/analytics/kafka.html" id="kafka">Kafka</a>
              </li>
              <!-- START : 수정 : 211005 Elasticsearch 추가 -->
              <li>
                <a href="product/analytics/elasticsearch.html" id="elasticsearch">Elasticsearch</a>
              </li>
              <!-- END : 수정 : 211005 Elasticsearch 추가 -->
            </ul>
          </div>
          <div class="page-menu-inner" id="aiService_detail_sub">
            <ul>
              <li>
                <a href="product/aiService/kubeflow.html" id="kubeflow">Kubeflow</a>
              </li>
            </ul>
          </div>
          <div class="page-menu-inner" id="management_detail_sub">
            <ul>
              <li>
                <a href="product/management/logNaudit.html" id="logNaudit">Logging & Audit</a>
              </li>
              <li>
                <a href="product/management/monitoring.html" id="monitoring">Cloud Monitoring</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div class="wrap-layer-popup console" data-popup="consolePopup" role="dialog">
        <div class="inner-layer-popup">
          <div class="console-content">
            <div class="wrap-layer-popup-title">
              <div class="check-box1">
                <input type="checkbox" id="consoleCheck" />
                <label for="consoleCheck">
                  <span class="check"></span>
                  <span class="i18n-inherit">다시보지 않기</span>
                </label>
              </div>
              <button class="btn-close-popup" data-popup-close="consolePopup"></button>
            </div>
            <div class="tab-wrap1" data-type="tab-wrap">
              <ul class="panels">
                <li id="panel3-1" role="tabpanel" tabindex="0">
                  <img src="assets/images/img/img_dashboard_home.gif" alt="콘솔소개 이미지" />
                </li>
                <li id="panel3-2" role="tabpanel" tabindex="0" hidden>
                  <img src="assets/images/img/img_iam_home.gif" alt="콘솔소개 이미지" />
                </li>
              </ul>
              <div class="right-content">
                <div class="card-image">
                  <div class="card-content">
                    <h4 class="i18n-br" data-i18n="label.label_24"></h4>
                    <p class="text" data-i18n="message.message_62"></p>
                  </div>
                </div>
                <ul class="tablist" role="tablist">
                  <li class="tab-item" role="tab">
                    <button
                      type="button"
                      class="active btn-chips-filter"
                      role="button"
                      aria-controls="panel3-1"
                      data-type="tab-item"
                      data-i18n="button.button_9"
                    >
                    </button>
                  </li>
                  <li class="tab-item" role="tab">
                    <button
                      type="button"
                      class="btn-chips-filter"
                      role="button"
                      aria-controls="panel3-2"
                      data-type="tab-item"
                      data-i18n="button.button_10"
                    >
                    </button>
                  </li>
                </ul>
                <ul class="login-btn">
                  <li>
                    <a href="javascript:;" class="btn-solid large reverse">회원가입</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="btn-opacity large">기존 SDS회원 로그인</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-layer-popup" data-popup="announcementPopup" role="dialog">
        <div class="inner-layer-popup">
          <div class="wrap-layer-popup-title" tabindex="0">
            <strong class="font-heading3">안내</strong>
            <button class="btn-close-popup" data-popup-close="announcementPopup"></button>
          </div>
          <div class="layer-popup-contents font-body4">
            <div class="inner" data-i18n="message.message_1120"></div>
          </div>
          <div class="layer-popup-bottom">
            <button type="button" class="btn-solid w100" data-popup-close="announcementPopup" data-i18n="button.button_57"></button>
          </div>
        </div>
      </div>
    `;
  }

  /////////////////////
  // 공통 footer 적용
  /////////////////////
  const $footerTemplate = document.querySelector('#footer-template');
  if ($footerTemplate) {
    $footerTemplate.innerHTML = `
      <footer>
        <div class="page-content">
          <div class="ft-top">
            <div class="ft-info">
              <strong><span class="hidden">SDS Cloud Platform Essential</span></strong>

              <ul class="ft-link">
                <li><a href="support/question.html" class="btn-link qna" data-i18n="button.button_15"></a></li>
                <!-- START : 수정 : 210803 무료체험 삭제 -->
                <!-- END : 수정 : 210803 무료체험 삭제 -->
              </ul>
            </div>
            <nav class="ft-menu">
              <ul>
                <li>
                  <button type="button" class="menu-title" data-i18n="category.category_1"></button>
                  <div class="menu-depth2">
                    <ul>
                      <li>
                        <a href="intro/services.html" data-i18n="label.label_1"></a>
                      </li>
                      <li>
                        <a href="intro/architecture.html" data-i18n="label.label_63"></a>
                      </li>
                      <li>
                        <a href="intro/case.html" data-i18n="category.category_3"></a>
                      </li>
                      <li>
                        <a href="intro/datacenter.html" data-i18n="category.category_4"></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button type="button" class="menu-title" data-i18n="category.category_5"></button>
                  <div class="menu-depth2">
                    <ul>
                      <li>
                        <a href="product/compute.html">Compute</a>
                      </li>
                      <li>
                        <a href="product/storage.html">Storage</a>
                      </li>
                      <li>
                        <a href="product/database.html">Database</a>
                      </li>
                      <li>
                        <a href="product/container.html">Container</a>
                      </li>
                      <li>
                        <a href="product/network.html">Networking</a>
                      </li>
                      <li>
                        <a href="product/security.html">Security</a>
                      </li>
                      <li>
                        <a href="product/appService.html">Application Service</a>
                      </li>
                      <li>
                        <a href="product/analytics.html">Analytics</a>
                      </li>
                      <li>
                        <a href="product/aiService.html">AI Service</a>
                      </li>
                      <li>
                        <a href="product/management.html">Management</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button type="button" class="menu-title" data-i18n="category.category_6"></button>
                  <div class="menu-depth2">
                    <ul>
                      <li>
                        <a href="pricing.html" data-i18n="category.category_7"></a>
                      </li>
                      <li>
                        <a href="pricing/calculator.html" data-i18n="category.category_8"></a>
                      </li>
                      <!-- START : 수정 : 210802 무료체험 추가 -->
                      <li>
                        <a href="freetrials.html" data-i18n="button.button_12"></a>
                      </li>
                      <!-- END : 수정 : 210802 무료체험 추가 -->
                    </ul>
                  </div>
                </li>
                <li>
                  <button type="button" class="menu-title" data-i18n="category.category_13"></button>
                  <div class="menu-depth2">
                    <ul>
                      <li>
                        <a href="support/notice.html" data-i18n="category.category_9"></a>
                      </li>
                      <li>
                        <a href="support/faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="support/question.html" data-i18n="label.label_3"></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- START : 파트너 페이지 제외시 삭제 해 주세요 -->
                <li>
                  <button type="button" class="menu-title">파트너</button>
                  <div class="menu-depth2">
                    <ul>
                      <li>
                        <a href="partner/program.html">파트너 프로그램</a>
                      </li>
                      <li>
                        <a href="partner/introduce.html">파트너 소개</a>
                      </li>
                      <li>
                        <a href="https://www.ncloud.com" target="_blank">파트너 포탈<i class="portal"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- END : 파트너 페이지 제외시 삭제 해 주세요 -->
              </ul>
            </nav>
          </div>
          <div class="ft-bottom">
            <ul class="ft-policy">
              <li>
                <a href="policy/privacy.html" data-i18n="button.button_23"></a>
              </li>
              <li>
                <a href="policy/terms.html" data-i18n="button.button_24"></a>
              </li>
              <li>
                <a href="policy/sla.html" data-i18n="button.button_25"></a>
              </li>
            </ul>
            <div class="ft-box-1">
              <div class="footer-family-wrap">
                <div class="select-box1 family">
                  <select name="selectFamily" onchange="familySite()">
                    <option value="" selected disabled>패밀리사이트</option>
                    <option value="samsung_SDS">삼성SDS</option>
                    <option value="cloud">클라우드</option>
                  </select>
                </div>
              </div>
              <div class="footer-lang-wrap">
                <div class="select-box1 lang">
                  <select name="selectLanguage">
                    <option value="ko_KR">한국어</option>
                    <option value="en_US">English</option>
                  </select>
                </div>
              </div>
            </div>
            <address class="font-body5">
              <span data-i18n="label.label_487"></span>
              <span><span class="i18n-inherit" data-i18n="label.label_488"></span> : <a href="tel:02-6155-3114">02-6155-3114</a></span>
              <span>Copyright SAMSUNG SDS. All rights reserved.</span>
            </address>
          </div>
        </div>
      </footer>
    `;
  }

  /* gnb 초기화 */
  const initGnb = () => {
    // 언어변환 select box
    document.querySelectorAll('[name=selectLanguage]').forEach((v) => {
      // init
      v.value = lang == 'en' ? 'en_US' : 'ko_KR';
      v.onchange = (e) => {
        // local storage 값 변경
        window.localStorage.setItem('language', e.target.value);
        // reload
        location.reload();
      };
    });

    const url = window.location;
    const pName = url.pathname.split('/');
    const productId = pName[pName.length - 3];
    const parentId = pName[pName.length - 2];
    const currentPath = pName[pName.length - 1];
    const selectedId = currentPath.substr(0, currentPath.length - '.html'.length);

    if (productId === 'product') {
      // {base}/**/product/*/*.html
      document.querySelector('#' + productId).classList.add('page-active');
      document.querySelector('#' + productId + '_detail_sub').style.display = 'flex';
      document.querySelector('#' + parentId + '_detail_sub').style.display = 'block';
      document.querySelector('#' + selectedId).classList.add('active');
      let prDropdownSel;
      if (parentId === 'network') {
        prDropdownSel = 'Networking';
      } else if (parentId === 'appService') {
        prDropdownSel = 'Application Service';
      } else if (parentId === 'aiService') {
        prDropdownSel = 'AI Service';
      } else {
        prDropdownSel = parentId[0].toUpperCase() + parentId.slice(1, parentId.length);
      }
      document.querySelector('#product_dropdown_snb').innerHTML = prDropdownSel;
    } else if (productId === 'architecture') {
      // {base}/**/architecture/*/*.html
      document.querySelector('#intro').classList.add('page-active');
      document.querySelector('#intro_sub').style.display = 'flex';
      document.querySelector('#architecture').classList.add('active');
    } else {
      // START : 210802 : 무료체험 SCRIPT 추가
      if (selectedId === 'freetrials') {
        // {base}/**/freetrials.html
        document.querySelector('#pricing').classList.add('page-active');
        document.querySelector('#pricing_sub').style.display = 'flex';
        document.querySelector('#' + selectedId).classList.add('active');
      }
      // END : 210802 : 무료체험 SCRIPT 추가
      if (selectedId === 'product' || selectedId === 'pricing') {
        // {base}/**/product.html
        // {base}/**/pricing.html
        const selId = selectedId === 'pricing' ? 'pricing_option' : selectedId;
        document.querySelector('#' + selectedId).classList.add('page-active');
        document.querySelector('#' + selectedId + '_sub').style.display = 'flex';
        document.querySelector('#' + selId).classList.add('active');
      } else {
        document.querySelector('#' + parentId).classList.add('page-active');
        document.querySelector('#' + parentId + '_sub').style.display = 'flex';
        document.querySelector('#' + selectedId).classList.add('active');
      }
    }
    if (selectedId !== 'index') {
      document.querySelector('header').classList.add('subpage');
    }
  };
  try {
    initGnb();
  } catch (err) {
    console.log(err.message);
  }
})();
