import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
  progress?: number;
}

interface AchievementsTabProps {
  achievements: Achievement[];
}

const AchievementsTab: React.FC<AchievementsTabProps> = ({ achievements }) => {
  const getProgressTarget = (achievementName: string) => {
    switch (achievementName) {
      case 'Мастер Frontend': return 15;
      case 'Наставник': return 5;
      case 'Перфекционист': return 20;
      default: return 1;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.id} 
            className={`transition-all ${
              achievement.earned 
                ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  achievement.earned 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                    : 'bg-gray-300'
                }`}>
                  <Icon 
                    name={achievement.icon as any} 
                    size={24} 
                    className="text-white" 
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className={`text-lg ${
                    achievement.earned ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {achievement.name}
                  </CardTitle>
                  {achievement.earned && achievement.date && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                      Получено {achievement.date}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3">
                {achievement.description}
              </CardDescription>
              {!achievement.earned && achievement.progress && (
                <div>
                  <div className="flex justify-between mb-1 text-xs">
                    <span>Прогресс</span>
                    <span>{achievement.progress}/{getProgressTarget(achievement.name)}</span>
                  </div>
                  <Progress 
                    value={(achievement.progress / getProgressTarget(achievement.name)) * 100} 
                    className="h-2" 
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AchievementsTab;