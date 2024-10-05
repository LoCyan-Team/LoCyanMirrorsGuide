<template>
  <a-config-provider>
    <a-app>
      <a-page-header title="LoCyan Mirrors 使用指南" style="border: 1px solid rgb(235, 237, 240)" />
      <div class="outbox">
        <a-card title="常用软件及软件源、脚本镜像" class="card">
          <h2>地址信息</h2>
          <a-button
            type="link"
            style="padding-inline: 0"
            v-clipboard="mirror_url"
            v-clipboard:success="
              () => {
                notification.success({ message: '已复制', description: '内容已复制到剪切板' })
              }
            "
          >
            https://mirrors.locyan.cn
          </a-button>
          <a-divider></a-divider>
          <a-card title="镜像列表索引">
            <a-button type="primary" @click="openInNewTab('https://mirrors.locyan.cn/')">
              在新标签页中打开
            </a-button>
            <iframe class="mirror-index" src="https://mirrors.locyan.cn/"></iframe>
          </a-card>
        </a-card>
        <a-card title="DockerHub 镜像" class="card">
          <h2>地址信息</h2>
          <a-button
            type="link"
            style="padding-inline: 0"
            v-clipboard="docker_mirror_url"
            v-clipboard:success="
              () => {
                notification.success({ message: '已复制', description: '内容已复制到剪切板' })
              }
            "
          >
            https://docker.mirrors.locyan.cn
          </a-button>
          <a-divider></a-divider>
          <h2>使用示例</h2>
          <p>编辑 <span class="inline-code">/etc/docker/daemon.json</span>:</p>
          <highlightjs language="json" :code="example_docker_config"></highlightjs>
        </a-card>
      </div>
      <a-divider></a-divider>
      <footer>
        <span>Copyright © 2024 <a href="https://locyan.cn" target="_blank">LoCyanTeam</a>.</span>
        <br />
        <span
          >镜像站分发的内容版权归原作者所有，本站最终解释权由
          <a href="https://locyan.cn" target="_blank">LoCyanTeam</a> 所有。</span
        >
        <br />
        <span
          >联系我们:
          <a href="https://doc.locyanfrp.cn/contact" target="_blank">联系方式</a></span
        >
      </footer>
    </a-app>
  </a-config-provider>
</template>

<script setup>
import { notification } from 'ant-design-vue'

const mirror_url = 'https://mirrors.locyan.cn'
const docker_mirror_url = 'https://docker.mirrors.locyan.cn'

const example_docker_config = `{
  "registry-mirrors": [
    "https://docker.mirrors.locyan.cn"
  ]
}`

function openInNewTab(url) {
  window.open(url)
}
</script>

<style scoped>
.outbox {
  margin: 1.5rem;
}

.mirror-index {
  width: 100%;
  border: 0;
  margin-top: 1rem;
}

footer {
  margin: 2rem;
  margin-top: 0;
  padding-bottom: 2rem;
}
</style>
