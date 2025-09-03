import { BusinessCard } from "@/components/ui/business-card";
import { 
  Building, 
  Users, 
  UserCheck, 
  Award, 
  MapPin, 
  Hotel,
  Calculator,
  Settings,
  Database,
  Map,
  Calendar
} from "lucide-react";

export const CenterPanel = () => {
  const sections = [
    {
      title: "D",
      items: [
        { name: "グループ台帳", icon: Building },
        { name: "店舗台帳", icon: Building },
        { name: "顧客台帳", icon: Users },
        { name: "顧客ポイント", icon: Award },
        { name: "ホステス台帳", icon: Users },
        { name: "スタッフ台帳", icon: Users },
        { name: "週間ホステス出勤", icon: Calendar },
        { name: "地域区分", icon: Map },
        { name: "ホテル", icon: Hotel },
        { name: "有料道路", icon: MapPin }
      ]
    },
    {
      title: "E",
      items: [
        { name: "燃料・エコ手当管理", icon: Settings },
        { name: "メディア管理", icon: Database },
        { name: "顧客車情報", icon: Users },
        { name: "派遣地区別交通費", icon: MapPin }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="border border-border rounded-lg p-4">
          <div className="grid grid-cols-1 gap-2">
            {section.items.map((item) => (
              <BusinessCard 
                key={item.name} 
                variant="gray"
                className="flex items-center gap-3 p-3 text-sm"
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </BusinessCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};