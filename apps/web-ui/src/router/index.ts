import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


import PrivateSales from '../views/private-Sales.vue'
import AirdropList from '../views/airdrop-list.vue'
import CreateZkToken from '../views/create-zkToken.vue'
import CreateFairLaunch from '../views/create-fair-launch.vue'
import CreateNormalLaunch from '../views/create-normal-launch.vue'
import CreatePrivateSale from '../views/create-private-sale.vue'
import CreateAirdrop from '../views/create-airdrop.vue'
import CreateLock from '../views/create-lock.vue'
import CreateZkNFT from '../views/create-zkNFT.vue'
import Services from '../views/Services.vue'
import Team from '../views/Team.vue'
import FAQ from '../views/FAQ.vue'
import Comments from '../views/Comments.vue'
import AddFans from '../views/Add-fans.vue'
import PraiseAndCollection from '../views/praise-and-collection.vue'
import PrivateMessage from '../views/Private-Message.vue'
import SystemNotifications from '../views/System-Notifications.vue'
import MessageSettings from '../views/Message-Settings.vue'

import PreSales from '@/views/PreSales/pre-Sales.vue'
import AllLaunchpads from '@/views/PreSales/components/AllLaunchpads.vue'
import MyContributions from '@/views/PreSales/components/MyContributions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: '/pre-Sales',
          component: PreSales,
          children: [
            {
              path: '',
              component: AllLaunchpads
            },
            {
              path: '/pre-Sales/my-contributions',
              component: MyContributions
            }
          ]
        },
        {
          path: '/private-Sales',
          component: PrivateSales
        },
        {
          path: '/airdrop-list',
          component: AirdropList
        },
        {
          path: '/create-ZkToken',
          component: CreateZkToken
        },
        {
          path: '/create-Fair-Launch',
          component: CreateFairLaunch
        },
        {
          path: '/create-Normal-Launch',
          component: CreateNormalLaunch
        },
        {
          path: '/create-Private-Sale',
          component: CreatePrivateSale
        },
        {
          path: '/create-Airdrop',
          component: CreateAirdrop
        },
        {
          path: '/create-Lock',
          component: CreateLock
        },
        {
          path: '/create-zkNFT',
          component: CreateZkNFT
        },
        {
          path: '/services',
          component: Services
        },
        {
          path: '/team',
          component: Team
        },
        {
          path: '/faq',
          component: FAQ
        },
        {
          path: '/comments',
          component: Comments
        },
        {
          path: '/add-fans',
          component: AddFans
        },
        {
          path: '/praise-and-collection',
          component: PraiseAndCollection
        },
        {
          path: '/private-message',
          component: PrivateMessage
        },
        {
          path: '/system-notifications',
          component: SystemNotifications
        },
        {
          path: '/message-settings',
          component: MessageSettings
        },

      ]
    },
  ]
})

export default router


