import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
}

interface UserStats {
  totalSolved: number;
  totalTasks: number;
  currentRating: number;
  weeklyGrowth: number;
  categoriesLearned: number;
  totalCategories: number;
}

interface OverviewTabProps {
  achievements: Achievement[];
  userStats: UserStats;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ achievements, userStats }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Trophy" size={20} className="text-yellow-500" />
              Недавние достижения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Icon name={achievement.icon as any} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <div className="text-xs text-gray-500">{achievement.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={20} className="text-blue-500" />
              Прогресс обучения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Решено заданий</span>
                  <span className="text-sm text-gray-600">{userStats.totalSolved}/{userStats.totalTasks}</span>
                </div>
                <Progress value={(userStats.totalSolved / userStats.totalTasks) * 100} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Изучено категорий</span>
                  <span className="text-sm text-gray-600">{userStats.categoriesLearned}/{userStats.totalCategories}</span>
                </div>
                <Progress value={(userStats.categoriesLearned / userStats.totalCategories) * 100} />
              </div>
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-medium">Рост за неделю</span>
                  <span className="text-green-600 font-bold">+{userStats.weeklyGrowth} очков</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;