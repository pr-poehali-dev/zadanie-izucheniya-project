import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsTabProps {
  skillsProgress: Skill[];
}

const SkillsTab: React.FC<SkillsTabProps> = ({ skillsProgress }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Brain" size={20} />
            Прогресс по навыкам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {skillsProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsTab;