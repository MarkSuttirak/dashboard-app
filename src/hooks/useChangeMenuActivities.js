import { useTranslation } from "react-i18next";
import { dashboardActivitiesImages, workspaceImages } from "src/components/icon-menus/workspace-images";

const useChangeMenuActivities = (menu) => {

  const { t } = useTranslation()

  const workspaceMenus = [
    { title: t('workspace_buttons.manage_business'), icon: workspaceImages.manageBusiness, link: 'https://www.zaviago.com/manage' },
    { title: t('workspace_buttons.blog_editor'), icon: workspaceImages.blogAndNews, link: '/coming-soon' },
    { title: 'ระบบข้อมูลลูกค้า', icon: workspaceImages.customerDataSystem, link: 'https://www.zaviago.com/crm' },
    { title: 'จัดการเว็บไซต์', icon: workspaceImages.manageWebsite, link: '/coming-soon' },
    { title: 'ตามงานและดูโปรเจ็ค', icon: workspaceImages.projectManagement, link: 'https://www.zaviago.com/marketplace' },
    { title: 'ออกแบบ Graphic', icon: workspaceImages.graphicDesign, link: '/coming-soon' },
    { title: 'WhiteBoard', icon: workspaceImages.whiteboard, link: '/coming-soon' },
    { title: 'SalesTeam', icon: workspaceImages.salesteam, link: '/coming-soon' },
    { title: 'HRSpace', icon: workspaceImages.hrspace, link: '/coming-soon' },
    { title: 'เว็บไซต์', icon: workspaceImages.manageWebsite, link: '/coming-soon' },
    { title: 'Line CRM', icon: workspaceImages.linecrm, link: '/coming-soon' },
    { title: 'แคชเชียร์ - POS', icon: workspaceImages.pos, link: '/coming-soon' },
  ]

  const actionMenus = menu === t('workspace_buttons.manage_business') ? [
    { title: 'Stand out online with website', image: dashboardActivitiesImages.startOnlineWebsite },
    { title: 'Get custom domain', image: dashboardActivitiesImages.customDomain },
    { title: 'Responsive design', image: dashboardActivitiesImages.responsiveDesign },
  ]
  : []

  const menuActivities = menu === t('workspace_buttons.manage_business') ? [
    { title: 'สร้างและออกแบบเว็บไซต์', image: dashboardActivitiesImages.createWebsites },
    { title: 'ไวท์บอร์ด', image: dashboardActivitiesImages.createWhiteboard },
    { title: 'จัดการ LineOA', image: dashboardActivitiesImages.manageOA },
    { title: 'สร้างพรีเซ็นเทชั่น', image: dashboardActivitiesImages.presentation },
    { title: 'Banner', image: dashboardActivitiesImages.banner }
  ] 
  : menu = t('workspace_buttons.blog_editor') ? [
    { title: 'จัดการสินค้า', image: dashboardActivitiesImages.manageProducts },
    { title: 'จัดการคำสั่งซื้อ', image: dashboardActivitiesImages.manageOrders },
    { title: 'หมวดหมู่สินค้าต่างๆ', image: dashboardActivitiesImages.otherCategories },
    { title: 'เช็คยอดขาย', image: dashboardActivitiesImages.checkSales },
    { title: 'โกดังสินค้า', image: dashboardActivitiesImages.warehouses },
  ] 
  : []

  return { menuActivities, workspaceMenus, actionMenus }
}

export default useChangeMenuActivities