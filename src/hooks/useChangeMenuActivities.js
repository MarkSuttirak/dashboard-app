import { useTranslation } from "react-i18next";
import { dashboardActivitiesImages, workspaceImages } from "src/components/icon-menus/workspace-images";

const useChangeMenuActivities = (menu) => {

  const { t } = useTranslation()

  const workspaceMenus = [
    { title: 'สำหรับคุณ', icon: workspaceImages.forYou, isComingSoon: false },
    { title: t('workspace_buttons.manage_business'), icon: workspaceImages.manageBusiness, isComingSoon: false },
    { title: 'ระบบข้อมูลลูกค้า', icon: workspaceImages.customerDataSystem, isComingSoon: false },
    { title: 'จัดการเว็บไซต์', icon: workspaceImages.manageWebsite, isComingSoon: false },
    { title: 'ตามงานและดูโปรเจ็ค', icon: workspaceImages.projectManagement, isComingSoon: true },
    { title: 'Graphic Design', icon: workspaceImages.graphicDesign, isComingSoon: true },
    { title: 'รวมแชท', icon: workspaceImages.pos, isComingSoon: false },
    { title: 'WhiteBoard', icon: workspaceImages.whiteboard, isComingSoon: false },
    { title: 'SalesTeam', icon: workspaceImages.salesteam, isComingSoon: false },
    { title: 'NoteBoard', icon: workspaceImages.whiteboard, isComingSoon: false },
    { title: 'HRSpace', icon: workspaceImages.hrspace, isComingSoon: false },
    { title: 'การตลาด', icon: workspaceImages.hrspace, isComingSoon: false },
    { title: 'Data (BI)', icon: workspaceImages.manageWebsite, isComingSoon: false },
    { title: 'Line CRM', icon: workspaceImages.linecrm, isComingSoon: true },
    { title: 'แคชเชียร์', icon: workspaceImages.pos, isComingSoon: true },
    { title: t('workspace_buttons.blog_editor'), icon: workspaceImages.blogAndNews, isComingSoon: true },
  ]

  const actionMenus = menu === t('workspace_buttons.manage_business') || menu === "สำหรับคุณ" ? [
    { title: 'Stand out online with website', image: dashboardActivitiesImages.startOnlineWebsite },
    { title: 'Get custom domain', image: dashboardActivitiesImages.customDomain },
    { title: 'Responsive design', image: dashboardActivitiesImages.responsiveDesign },
  ]
  : []

  const menuActivities = menu === 'สำหรับคุณ' ? [
    { title: 'สร้างและออกแบบเว็บไซต์', image: dashboardActivitiesImages.createWebsites },
    { title: 'ไวท์บอร์ด', image: dashboardActivitiesImages.whiteboardImg },
    { title: 'Loyalty Program', image: dashboardActivitiesImages.loyaltyProgram },
    { title: 'จัดการ LineOA', image: dashboardActivitiesImages.manageOA },
    { title: 'Project Management', image: dashboardActivitiesImages.projectManagementImg }
  ] 
  : menu === t('workspace_buttons.manage_business') ? [
    { title: 'จัดการสินค้าของคุณ', image: dashboardActivitiesImages.manageProducts, link:"https://apps.hosting.zaviago.com/app/item" },
    { title: 'เพิ่มสินค้าใหม่', image: dashboardActivitiesImages.addProducts, link:"https://apps.hosting.zaviago.com/app/item/new-item-bwetebxyis" },
    { title: 'จัดการคำสั่งซื้อ', image: dashboardActivitiesImages.manageOrders, link:"https://apps.hosting.zaviago.com/app/sales-invoice" },
    { title: 'เปิดคำสั่งซื้อใหม่', image: dashboardActivitiesImages.addOrders, link:"https://apps.hosting.zaviago.com/app/sales-invoice/new-sales-invoice-oxxryhfmpw" },
    { title: 'เช็คการแจ้งโอน', image: dashboardActivitiesImages.checkTransactions, link:"https://apps.hosting.zaviago.com/app/payment-entry" },
    { title: 'หมวดหมู่สินค้า', image: dashboardActivitiesImages.productCategories, link:"https://apps.hosting.zaviago.com/app/item-group" },
  ] 
  : menu === 'ระบบข้อมูลลูกค้า' ? [
    { title: 'ข้อมูลลูกค้าทั้งหมดของคุณ', image: dashboardActivitiesImages.customerData, link:"https://apps.hosting.zaviago.com/app/customer" },
    { title: 'เพิ่มลูกค้าใหม่', image: dashboardActivitiesImages.addCustomers },
    { title: 'ตั้งค่ากลุ่มลูกค้า', image: dashboardActivitiesImages.setCustomerGroups, link:"https://apps.hosting.zaviago.com/app/customer-group" },
  ] 
  : menu === 'จัดการเว็บไซต์' ? [
    { title: 'เพจต่างๆในเว็บไซต์ของคุณ', image: dashboardActivitiesImages.yourPages },
    { title: 'สร้างเพจใหม่', image: dashboardActivitiesImages.newPage },
  ]
  : menu === 'SalesTeam' ? [
    { title: 'Loyalty Program', image: dashboardActivitiesImages.loyaltyProgramTwo, link:"https://apps.hosting.zaviago.com/app/loyalty-program" },
    { title: 'ของรางวัล', image: dashboardActivitiesImages.rewards },
    { title: 'ระดับลูกค้า', image: dashboardActivitiesImages.customerLevels },
    { title: 'การแลกซื้อผ่านแต้ม', image: dashboardActivitiesImages.pointPurchase },
  ]
  : menu === 'การตลาด' ? [
    { title: 'สร้างโค้ดส่วนลด', image: dashboardActivitiesImages.addDiscounts, link:"https://apps.hosting.zaviago.com/app/coupon-code/new-coupon-code-tldgomkioi" },
    { title: 'สร้าง Bundle Deal', image: dashboardActivitiesImages.bundleDeal, link:"https://apps.hosting.zaviago.com/app/product-bundle" },
    { title: 'สร้าง Add-on Deal', image: dashboardActivitiesImages.addOnDeal, link:"https://apps.hosting.zaviago.com/app/pricing-rule" },
    { title: 'สร้าง Flash Sale', image: dashboardActivitiesImages.flashSale },
  ]
  : menu === 'WhiteBoard' ? [
    { title: 'ดูไวท์บอร์ดทั้งหมดของคุณ', image: dashboardActivitiesImages.allWhiteboards },
    { title: 'สร้างไวท์บอร์ดใหม่', image: dashboardActivitiesImages.createWhiteboard },
  ]
  : menu === 'HRSpace' ? [
    { title: 'พนักงานทั้งหมด', image: dashboardActivitiesImages.loyaltyProgramTwo, link:"https://apps.hosting.zaviago.com/app/loyalty-program" },
    { title: 'ข้อมูลการเช็คอินของพนักงาน', image: dashboardActivitiesImages.rewards },
    { title: 'ผู้สมัครงานทั้งหมด', image: dashboardActivitiesImages.customerLevels },
    { title: 'การขอลางานของพนักงาน', image: dashboardActivitiesImages.pointPurchase },
  ]
  : menu === 'Data (BI)' ? [
    { title: 'วิเคราะห์การขาย', image: dashboardActivitiesImages.salesAnalysis },
    { title: 'วิเคราะห์ลูกค้า', image: dashboardActivitiesImages.addDiscounts, link:"https://apps.hosting.zaviago.com/app/coupon-code/new-coupon-code-tldgomkioi" },
    { title: 'Data Dashboard ทั้งหมด', image: dashboardActivitiesImages.bundleDeal, link:"https://apps.hosting.zaviago.com/app/product-bundle" },
    { title: 'Data Notebook', image: dashboardActivitiesImages.addOnDeal, link:"https://apps.hosting.zaviago.com/app/pricing-rule" },
    { title: 'สร้าง Data Dashboard ใหม่', image: dashboardActivitiesImages.flashSale },
    { title: 'สร้าง Data Query', image: dashboardActivitiesImages.flashSale },
  ]
  : menu === 'รวมแชท' ? [
    { title: 'Chat and Inboxes', image: dashboardActivitiesImages.loyaltyProgramTwo, link:"https://apps.hosting.zaviago.com/app/loyalty-program" },
    { title: 'เพิ่มและจัดการ แอดมินตอบแชท', image: dashboardActivitiesImages.rewards },
    { title: 'จัดการทีมแอดมิน ของ Inbox ต่างๆ', image: dashboardActivitiesImages.customerLevels },
    { title: 'จัดการแท็กต่างๆของแชท', image: dashboardActivitiesImages.pointPurchase },
    { title: 'รีพอร์ตการตอบแชท', image: dashboardActivitiesImages.pointPurchase },
  ]
  : []

  const activitiesTitle = menu === 'สำหรับคุณ' ?
    t('what_you_want_to_do') : 
    menu === t('workspace_buttons.manage_business') ? "จัดการสินค้าและการขายของคุณ" : 
    menu === 'ระบบข้อมูลลูกค้า' ? "ข้อมูลต่างๆของลูกค้า" : 
    menu === 'จัดการเว็บไซต์' ? "สร้างเว็บและดูแลเพจต่างๆของคุณ" :
    menu === 'WhiteBoard' ? "ระบบไวท์บอร์ด" :
    menu === 'SalesTeam' ? "ระบบ Point And Rewards" :
    menu === 'HRSpace' ? "ฝ่ายบุคคล & ทรัพยากรมนุษย์" :
    menu === 'รวมแชท' ? "รวมแชท" :
    menu === 'Data (BI)' ? "Data Dashboard" :
    menu === 'การตลาด' ? "การตลาดและแคมเปญ" :
    ""

  return { menuActivities, workspaceMenus, actionMenus, activitiesTitle }
}

export default useChangeMenuActivities