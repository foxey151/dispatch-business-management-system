import { BusinessCard } from "@/components/ui/business-card";
import { 
  Edit3, 
  Calendar, 
  TrendingUp, 
  Globe, 
  Users, 
  Store,
  DollarSign,
  BarChart3,
  Clock,
  Activity,
  FileSpreadsheet,
  Unlock,
  Download,
  CreditCard
} from "lucide-react";

export const RightPanel = () => {
  const sections = [
    {
      title: "F",
      items: [
        { name: "各店リスト", icon: Edit3 },
        { name: "ホステスマネージャリスト", icon: Calendar },
        { name: "店舗別顧客ルート集計表", icon: BarChart3 },
        { name: "時間帯別ホステス出勤", icon: Clock },
        { name: "リアルタイム自動成績集計表", icon: Activity },
        { name: "店舗別メディア利用集計", icon: BarChart3 },
        { name: "ロック解除承認リスト", icon: Unlock }
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
                variant="accent"
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