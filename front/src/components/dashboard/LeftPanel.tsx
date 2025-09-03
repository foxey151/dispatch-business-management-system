import { BusinessCard } from "@/components/ui/business-card";
import { 
  Monitor, 
  Calendar, 
  Users, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Search,
  TrendingUp,
  Camera,
  Star,
  Car
} from "lucide-react";

export const LeftPanel = () => {
  const sections = [
    {
      title: "A",
      items: [
        { name: "RTリパネル", icon: Monitor },
        { name: "配車パネル2D", icon: Car },
        { name: "ホステス出勤予定", icon: Calendar },
        { name: "従業員出勤予定", icon: Calendar },
        { name: "手配表", icon: FileText },
        { name: "ホステスランキング", icon: TrendingUp }
      ]
    },
    {
      title: "B",
      items: [
        { name: "入金伝票", icon: DollarSign },
        { name: "出金伝票", icon: DollarSign },
        { name: "売上伝票", icon: DollarSign }
      ]
    },
    {
      title: "C",
      items: [
        { name: "管理用リスト", icon: FileText },
        { name: "本日の日報", icon: BarChart3 },
        { name: "集計・グラフ", icon: TrendingUp },
        { name: "従業員給与集計", icon: DollarSign },
        { name: "会計集計", icon: BarChart3 },
        { name: "面接リスト・集計", icon: Users },
        { name: "アルバイト給与月計", icon: DollarSign }
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
                variant="primary"
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